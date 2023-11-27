import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

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

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

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
	const billRef = useRef();
	// const [isBillVisible, setIsBillVisible] = useState(false);

	const [openBill, setOpenBill] = useState(false);
	const [orderSuccess, setOrderSuccess] = useState(false);
	const [isPlacingOrder, setIsPlacingOrder] = useState(false);

	const placeOrder = () => {
		// openModal();
		setOpenBill(true);
		setIsPlacingOrder(true);
	};

	// const handlePrint = useReactToPrint({
	// 	content: () => billRef.current,
	// });

	const handlePrint = () => {
		html2canvas(billRef.current).then((canvas) => {
			const imgData = canvas.toDataURL("image/png");
			const pdf = new jsPDF();
			pdf.addImage(imgData, "JPEG", 0, 0);
			pdf.save("invoice.pdf");
		});
	}

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
				<div ref={billRef}>
					<BillTemplate />
				</div>
				<button
					onClick={() => {
						handlePrint();
						setOpenBill(false);
						setOrderSuccess(true);
						setIsPlacingOrder(false);
					}}
				>
					Agree
				</button>
			</StyledDialog>
		</Container>
	);
}
