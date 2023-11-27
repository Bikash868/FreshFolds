import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { ReactComponent as Logo } from '@assets/svg/logo.svg';

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

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const BillTable = () => {
	return (
		<TableContainer component={Paper} sx={{boxShadow:'none',p:2}}>
		<Table aria-label="spanning table">
			<TableHead>
			<TableRow>
				<TableCell align="center" colSpan={3}>
				Details
				</TableCell>
				<TableCell align="right">Price</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>Desc</TableCell>
				<TableCell align="right">Qty.</TableCell>
				<TableCell align="right">Unit</TableCell>
				<TableCell align="right">Sum</TableCell>
			</TableRow>
			</TableHead>
			<TableBody>
			{rows.map((row) => (
				<TableRow key={row.desc}>
				<TableCell>{row.desc}</TableCell>
				<TableCell align="right">{row.qty}</TableCell>
				<TableCell align="right">{row.unit}</TableCell>
				<TableCell align="right">{ccyFormat(row.price)}</TableCell>
				</TableRow>
			))}
			<TableRow>
				<TableCell rowSpan={3} />
				<TableCell colSpan={2}>Subtotal</TableCell>
				<TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>Tax</TableCell>
				<TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
				<TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell colSpan={2}>Total</TableCell>
				<TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
			</TableRow>
			</TableBody>
		</Table>
		</TableContainer>
	)
}

export const BillTemplate = React.forwardRef((props, ref) => {
  return (
	<div ref={ref} style={{padding:'2rem', display:'flex', flexDirection:'column',gap:1}}>
		<div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
			<Typography sx={{textAlign:'left', color:'red', fontWeight:700}}>RAJORIA <br/> <span style={{fontWeight:500, fontSize:'0.75rem', color:'#1B2031'}}>DRY CLEANERS & LAUNDRY SERVICES</span></Typography>
			<Logo/>
		</div>
		<div style={{display:'grid', justifyContent:'space-around',alignItems:'center', gridTemplateColumns:'1fr 1fr 1fr'}}>
			<div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', height:'100%'}}>
				<Typography align='left' fontSize={'0.65rem'}>Bill To</Typography>
				<Typography align='left' fontSize={'0.65rem'}>Krishna Sharma</Typography>
				<Typography align='left' fontSize={'0.65rem'}>2 Court Square, New Delhi, 560037</Typography>
			</div>

			<div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', height:'100%'}}>
				<Typography align='left' fontSize={'0.65rem'}>Attendant</Typography>
				<Typography align='left' fontSize={'0.65rem'}>Payal Kumar</Typography>
				<Typography align='left' fontSize={'0.65rem'}>NA</Typography>
			</div>

			<div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', height:'100%'}}>
				<Typography align='left' fontSize={'0.65rem'}>Invoice Id: 533</Typography>
				<Typography align='left' fontSize={'0.65rem'}>Date: 11/26/2023</Typography>
				<Typography align='left' fontSize={'0.65rem'}>Due Date: 11/29/2023</Typography>
			</div>
		</div>

		<BillTable/>

		<div style={{marginTop:'auto',display:'flex', flexDirection:'column', alignItems:'flex-start',}}>
			<Typography align='left' fontSize={'0.65rem'} fontWeight={700}>Terms & Conditions</Typography>
			<Typography align='left' fontSize={'0.65rem'} >* No guarentee for hard stains</Typography>
			<Typography sx={{textAlign:'left', color:'red', fontWeight:700, mt:'0.5rem'}} fontSize={'1rem'}>Thank you !</Typography>
		</div>
	</div>
  );
})

