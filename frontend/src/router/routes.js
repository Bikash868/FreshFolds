import { BaseLayout } from '@layouts/Base';
// import { LoginLayout } from '@layouts';
// import { LandingLayout } from '@layouts';

import Report from '@views/Reports';
import NewOrder from '@views/NewOrder';
import Customer from '@views/Customers';
import Dashboard from '@views/Dashboard';
import ApplyFilter from '@views/Filters';

export const Routes = [
	{
		path: '/',
		exact: true,
		layout: BaseLayout,
		private: false,
		component: <Dashboard/>,
	},
	{
		path: '/dashboard',
		exact: true,
		layout: BaseLayout,
		private: false,
		component: <Dashboard/>,
	},
	{
		path: '/new-order',
		exact: true,
		layout: BaseLayout,
		private: false,
		component: <NewOrder/>,
	},
	{
		path: '/apply-filter',
		exact: true,
		layout: BaseLayout,
		private: false,
		component: <ApplyFilter/>,
	},
	{
		path: '/customers',
		exact: true,
		layout: BaseLayout,
		private: false,
		component: <Customer/>,
	},
	{
		path: '/report',
		exact: true,
		layout: BaseLayout,
		private: false,
		component: <Report/>,
	},
];
