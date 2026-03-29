import * as React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { BarChart } from '@charts/Bar';
import { CardChart } from '@charts/Card';
import { PieChart } from '@charts/Pie';
import { DoughnutChart } from '@charts/Doughnut';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Dashboard() {
	return (
		<Container sx={{ mt: 4, overflow: 'auto' }}>
			<Grid container spacing={1}>
				<Grid item xs={3}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<CardChart title="Order received" value={36} icon={<ShoppingCartIcon/>}/>
					</Paper>
				</Grid>

				<Grid item xs={3}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<CardChart title="Order delivered" value={12} icon={<LocalShippingIcon/>}/>
					</Paper>
				</Grid>

				<Grid item xs={3}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<CardChart title="Order cancelled" value={12} icon={<CancelIcon/>}/>
					</Paper>
				</Grid>

				<Grid item xs={3}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<CardChart title="Order completed" value={12} icon={<CheckCircleIcon/>}/>
					</Paper>
				</Grid>

				<Grid item xs={6}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							// height: 280,
						}}
					>
						<BarChart />
					</Paper>
				</Grid>

				<Grid item xs={3}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 300,
						}}
					>
						<PieChart />
					</Paper>
				</Grid>

				<Grid item xs={3}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 300,
						}}
					>
						<DoughnutChart />
					</Paper>
				</Grid>

				<Grid item xs={6}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							// height: 240,
						}}
					>
						<BarChart />
					</Paper>
				</Grid>

				<Grid item xs={6}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							// height: 240,
						}}
					>
						<BarChart />
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
}
