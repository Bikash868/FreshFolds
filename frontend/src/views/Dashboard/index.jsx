import * as React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { BarChart } from '@charts/Bar';
import { CardChart } from '@charts/Card';
import { PieChart } from '@charts/Pie';
import { DoughnutChart } from '@charts/Doughnut';

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
						<CardChart />
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
						<CardChart />
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
						<CardChart />
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
						<CardChart />
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
