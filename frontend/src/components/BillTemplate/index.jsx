import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { ReactComponent as Logo } from '@assets/svg/logo.svg';
import { useSelector } from 'react-redux';
import { StyledTableCell } from './elements';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

const TAX_RATE = 0.09;

function ccyFormat(num) {
	return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
	return qty * unit;
}

function createRow(desc, qty, unit) {
	const price = priceRow(qty, unit);
	return { desc, qty, unit, price };
}

const BillTable = (props) => {
	const [rows, setRows] = React.useState([]);
	const { subTotal = 0, taxAmount = 0, total = 0 } = props.price;

	function formatRows() {
		const list = props.clothList.map((listItem) => createRow(listItem.name, listItem.quantity, listItem.unitPrice));
		setRows(list);
	}

	React.useEffect(() => {
		formatRows();
	}, [props]);

	return (
		<TableContainer component={Paper} sx={{ boxShadow: 'none', p: 2 }}>
			<Table aria-label="spanning table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="center" colSpan={3}>
							Details
						</StyledTableCell>
						<StyledTableCell align="right">Price</StyledTableCell>
					</TableRow>
					<TableRow>
						<StyledTableCell>Desc</StyledTableCell>
						<StyledTableCell align="right">Qty.</StyledTableCell>
						<StyledTableCell align="right">Unit</StyledTableCell>
						<StyledTableCell align="right">Sum</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.desc}>
							<StyledTableCell>{row.desc}</StyledTableCell>
							<StyledTableCell align="right">{row.qty}</StyledTableCell>
							<StyledTableCell align="right">{row.unit}</StyledTableCell>
							<StyledTableCell align="right">{ccyFormat(row.price)}</StyledTableCell>
						</TableRow>
					))}
					<TableRow>
						<StyledTableCell rowSpan={3} />
						<StyledTableCell colSpan={2}>Subtotal</StyledTableCell>
						<StyledTableCell align="right">{ccyFormat(subTotal)}</StyledTableCell>
					</TableRow>
					<TableRow>
						<StyledTableCell>Tax</StyledTableCell>
						<StyledTableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</StyledTableCell>
						<StyledTableCell align="right">{ccyFormat(taxAmount)}</StyledTableCell>
					</TableRow>
					<TableRow>
						<StyledTableCell colSpan={2}>Total</StyledTableCell>
						<StyledTableCell align="right">{ccyFormat(total)}</StyledTableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

BillTable.propTypes = {
	clothList: PropTypes.object,
	price: PropTypes.object,
};

export const BillTemplate = React.forwardRef((props, ref) => {
	const { clothList, price } = props;
	let { name, phone, flat, apartment, pin, country, city } = useSelector((state) => state.OrderReducer.customer);

	return (
		<div ref={ref} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: 1 }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Typography sx={{ textAlign: 'left', color: 'red', fontWeight: 700 }}>
					RAJORIA <br />{' '}
					<span style={{ fontWeight: 500, fontSize: '0.75rem', color: '#1B2031' }}>
						DRY CLEANERS & LAUNDRY SERVICES
					</span>
				</Typography>
				<Logo />
			</div>
			<div
				style={{
					display: 'grid',
					justifyContent: 'space-around',
					alignItems: 'center',
					gridTemplateColumns: '1fr 1fr 1fr',
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
					<Typography align="left" fontSize={'0.65rem'}>
						Bill To
					</Typography>
					<Typography align="left" fontSize={'0.65rem'}>
						{name}
					</Typography>
					<Typography align="left" fontSize={'0.65rem'}>
						+91 - {phone}
					</Typography>
					<Typography align="left" fontSize={'0.65rem'}>
						{flat}, {apartment}, {city}, {country}, {pin}
					</Typography>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
					<Typography align="left" fontSize={'0.65rem'}>
						Attendant
					</Typography>
					<Typography align="left" fontSize={'0.65rem'}>
						Krishan Kumar
					</Typography>
					<Typography align="left" fontSize={'0.65rem'}>
						+91 - 9898432323
					</Typography>
					<Typography align="left" fontSize={'0.65rem'}>
						WZ-878 NARAINA VILLAGE, N.D.-28
					</Typography>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
					<Typography align="left" fontSize={'0.65rem'}>
						Invoice Id: 533
					</Typography>
					<Typography align="left" fontSize={'0.65rem'}>
						Date: {dayjs().format('DD/MM/YYYY')}
					</Typography>
					<Typography align="left" fontSize={'0.65rem'}>
						Del. Date: {dayjs().add(2, 'day').format('DD/MM/YYYY')}
					</Typography>
				</div>
			</div>

			<BillTable clothList={clothList} price={price} />

			<div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
				<Typography align="left" fontSize={'0.65rem'} fontWeight={700}>
					Terms & Conditions
				</Typography>
				<Typography align="left" fontSize={'0.65rem'}>
					* No guarentee for hard stains
				</Typography>
				<Typography sx={{ textAlign: 'left', color: 'red', fontWeight: 700, mt: '0.5rem' }} fontSize={'1rem'}>
					Thank you !!
				</Typography>
			</div>
		</div>
	);
});

BillTemplate.propTypes = {
	clothList: PropTypes.object,
	price: PropTypes.object,
};

BillTemplate.defaultProps = {
	clothList: [],
	price: {
		subTotal: 0,
		taxAmount: 0,
		total: 0,
	},
};
