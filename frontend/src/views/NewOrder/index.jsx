import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { resetOrderDetails } from '@store/actions';

import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { StyledAccordion } from '@components/Accordion';
// import { useReactToPrint } from 'react-to-print';

import { ServiceDetails } from './ServiceDetails';
import { PickupDetailsForm } from './PickupDetails';
import { BillingDetailsForm } from './BillingDetails';
import { AddressDetailsForm } from './AddressDetails';
import { CustomerDetailsForm } from './CustomerDetails';

import { Button } from '@components/Button';
import { ReactComponent as ScanIcon } from '@assets/svg/scan.svg';
import { ReactComponent as PrinterIcon } from '@assets/svg/printer.svg';
import { ReactComponent as ArrowForwardIcon } from '@assets/svg/arrow-round-forward.svg';

import { StyledDialog } from '@components/Dialog';
import { BillTemplate } from '@components/BillTemplate';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export const ScanGarment = () => {
	const handleClick = () => {};
	return (
		<Button
			startIcon={<ScanIcon />}
			loading={false}
			variant={'outlined'}
			label={'Scan Garment'}
			handleClick={handleClick}
		/>
	);
};

export const PrintInvoice = (props) => {
	return (
		<Button
			startIcon={<PrinterIcon />}
			loading={false}
			variant={'contained'}
			label={'View Invoice'}
			handleClick={props.handleClick}
			disabled={!props.enable}
		/>
	);
};

PrintInvoice.propTypes = {
	enable: PropTypes.bool,
	handleClick: PropTypes.func,
};

export default function NewOrder() {
	const dryCleanbillRef = useRef();
	const normalWashBillRef = useRef();

	const dispatch = useDispatch();

	const { clothList } = useSelector((state) => state.OrderReducer);
	const { price } = useSelector((state) => state.OrderReducer);
	const { dryClean, normalWash } = price;

	const [openBill, setOpenBill] = useState(false);
	const [orderSuccess, setOrderSuccess] = useState(false);
	const [isPlacingOrder, setIsPlacingOrder] = useState(false);
	const [dryCleanItems, setDryCleanItems] = useState({ clothList: [] });
	const [normalWashItems, setNormalWashItems] = useState({ clothList: [] });

	const placeOrder = () => {
		setOpenBill(true);
		setIsPlacingOrder(true);
	};

	const handlePrint = () => {
		if (normalWashBillRef.current) {
			html2canvas(normalWashBillRef.current).then((canvas) => {
				const imgData = canvas.toDataURL('image/png');
				const pdf = new jsPDF();
				pdf.addImage(imgData, 'JPEG', 0, 0);
				pdf.save('NormalWash_invoice.pdf');
			});
		}

		if (dryCleanbillRef.current) {
			html2canvas(dryCleanbillRef.current).then((canvas) => {
				const imgData = canvas.toDataURL('image/png');
				const pdf = new jsPDF();
				pdf.addImage(imgData, 'JPEG', 0, 0);
				pdf.save('DryClean_invoice.pdf');
			});
		}
	};

	useEffect(() => {
		const clothsForDryClean = clothList.filter((d) => d?.serviceType === 'dryClean');
		const clothsForNormalWash = clothList.filter((d) => d?.serviceType !== 'dryClean');

		setDryCleanItems({
			price: {
				subTotal: dryClean,
				taxAmount: dryClean * 0.9,
				total: dryClean * 1.9,
			},
			clothList: clothsForDryClean,
		});

		setNormalWashItems({
			price: {
				subTotal: normalWash,
				taxAmount: normalWash * 0.9,
				total: normalWash * 1.9,
			},
			clothList: clothsForNormalWash,
		});
	}, [clothList]);

	return (
		<Container maxWidth={false}>
			<Grid container style={{ borderRadius: '1rem', background: '#fff' }}>
				<Grid item xs={12}>
					<StyledAccordion title={'Place new Order'} defaultExpanded>
						<CustomerDetailsForm />
					</StyledAccordion>
				</Grid>

				<Grid item xs={12}>
					<StyledAccordion title={'Pickup & Delivery'} defaultExpanded>
						<PickupDetailsForm />
					</StyledAccordion>
				</Grid>

				<Grid item xs={12}>
					<StyledAccordion title={'Address'} defaultExpanded>
						<AddressDetailsForm />
					</StyledAccordion>
				</Grid>

				<Grid item xs={12}>
					<StyledAccordion title={'Service & Detail'} rightElement={<ScanGarment />} defaultExpanded>
						<ServiceDetails />
					</StyledAccordion>
				</Grid>

				<Grid item xs={12}>
					{/* <StyledAccordion title={"Billing"} noBorder={true} rightElement={<PrintInvoice enable={orderSuccess} handleClick={handlePrint}/>} defaultExpanded >
                        <BillingDetailsForm/>
                    </StyledAccordion> */}

					<StyledAccordion title={'Billing'} noBorder={true} defaultExpanded>
						<BillingDetailsForm />
					</StyledAccordion>
				</Grid>
				<Grid item xs={12}>
					<div style={{ display: 'flex', marginLeft: 'auto', padding: '1rem', justifyContent: 'flex-end' }}>
						<Button
							startIcon={<ArrowForwardIcon />}
							loading={isPlacingOrder}
							variant={'contained'}
							label={'Place Order'}
							handleClick={placeOrder}
							disabled={clothList.length === 0}
						/>
					</div>
				</Grid>
			</Grid>
			<StyledDialog
				open={orderSuccess}
				onClose={() => {
					setOrderSuccess(false);
				}}
				title={'Order placed Successfully'}
			>
				<CheckCircleOutlineIcon style={{ color: 'green', fontSize: 40, textAlign: 'center' }} />
			</StyledDialog>

			<StyledDialog open={openBill} onClose={() => setOpenBill(false)}>
				<Grid container gap={2}>
					{dryCleanItems.clothList.length && (
						<Grid item ref={dryCleanbillRef}>
							<BillTemplate {...dryCleanItems} />
						</Grid>
					)}
					<Grid item ref={normalWashBillRef}>
						<BillTemplate {...normalWashItems} />
					</Grid>
				</Grid>
				<button
					onClick={() => {
						handlePrint();
						setOpenBill(false);
						setOrderSuccess(true);
						setIsPlacingOrder(false);
						dispatch(resetOrderDetails());
					}}
				>
					Agree
				</button>
			</StyledDialog>
		</Container>
	);
}
