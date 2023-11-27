import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

const hanleTrackClick = (id) => {
	window.location.href = `/apply-filter?field=customer&id=${id}`;
};

export const Data = {
	value: [
		{
			customerId: 'CUST-0001',
			name: 'Rakesh Kumar',
			status: <Typography sx={{color:'#1BC872'}}>Completed</Typography>,
			Orderdate: '10/02/2023',
			expectedDate: '10/02/2023',
			items: '8',
			track: (
				<Link component="button" variant="body2" onClick={() => hanleTrackClick('CUST-0001')}>
					Track
				</Link>
			),
		},
		{
			customerId: 'CUST-0002',
			name: 'Abinash Jha',
			status: <Typography sx={{color:'#EA0606'}}>Pending</Typography>,
			Orderdate: '10/02/2023',
			expectedDate: '10/02/2023',
			items: '5',
			track: (
				<Link component="button" variant="body2" onClick={() => hanleTrackClick('CUST-0001')}>
					Track
				</Link>
			),
		},
		{
			customerId: 'CUST-0003',
			name: 'Nikhil',
			status: <Typography sx={{color:'#EC9701'}}>In-progress</Typography>,
			Orderdate: '10/02/2023',
			expectedDate: '10/02/2023',
			items: '5',
			track: (
				<Link component="button" variant="body2" onClick={() => hanleTrackClick('CUST-0001')}>
					Track
				</Link>
			),
		},
		{
			customerId: 'CUST-0004',
			name: 'Bhupendra Yogi',
			status: <Typography sx={{color:'#1BC872'}}>Completed</Typography>,
			Orderdate: '10/02/2023',
			expectedDate: '10/02/2023',
			items: '5',
			track: (
				<Link component="button" variant="body2" onClick={() => hanleTrackClick('CUST-0001')}>
					Track
				</Link>
			),
		},
		{
			customerId: 'CUST-0005',
			name: 'Jhon Doe',
			status: <Typography sx={{color:'#EC9701'}}>In-progress</Typography>,
			Orderdate: '10/02/2023',
			expectedDate: '10/02/2023',
			items: '12',
			track: (
				<Link component="button" variant="body2" onClick={() => hanleTrackClick('CUST-0001')}>
					Track
				</Link>
			),
		},
		{
			customerId: 'CUST-0006',
			name: 'Parmeshwar Singh',
			status: <Typography sx={{color:'#1BC872'}}>Completed</Typography>,
			Orderdate: '10/02/2023',
			expectedDate: '10/02/2023',
			items: '5',
			track: (
				<Link component="button" variant="body2" onClick={() => hanleTrackClick('CUST-0001')}>
					Track
				</Link>
			),
		},
		{
			customerId: 'CUST-0007',
			name: 'Palak jha',
			status: <Typography sx={{color:'#1BC872'}}>Completed</Typography>,
			Orderdate: '10/02/2023',
			expectedDate: '10/02/2023',
			items: '6',
			track: (
				<Link component="button" variant="body2" onClick={() => hanleTrackClick('CUST-0001')}>
					Track
				</Link>
			),
		},
		{
			customerId: 'CUST-0008',
			name: 'Krishna Dasharathan',
			status: <Typography sx={{color:'#1BC872'}}>Completed</Typography>,
			Orderdate: '10/02/2023',
			expectedDate: '10/02/2023',
			items: '3',
			track: (
				<Link component="button" variant="body2" onClick={() => hanleTrackClick('CUST-0001')}>
					Track
				</Link>
			),
		},
		{
			customerId: 'CUST-0009',
			name: 'Mithilesh Yadav',
			status: <Typography sx={{color:'#1BC872'}}>Completed</Typography>,
			Orderdate: '10/02/2023',
			expectedDate: '10/02/2023',
			items: '15',
			track: (
				<Link component="button" variant="body2" onClick={() => hanleTrackClick('CUST-0001')}>
					Track
				</Link>
			),
		},
	],
};
