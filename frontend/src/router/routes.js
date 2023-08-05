import { BaseLayout } from '@layouts/Base';
// import { LoginLayout } from '@layouts';
// import { LandingLayout } from '@layouts';

// import UserPage from '@views/UserPage';
import Dashboard from '@views/Dashboard';
import NewOrder from '@views/NewOrder'

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
	// {
	// 	path: '/user',
	// 	exact: true,
	// 	// layout: LoginLayout, ::TODO
	// 	private: false,
	// 	// component: UserPage, ::TODO
	// },
	{
		path: '/new-order',
		exact: true,
		layout: BaseLayout,
		private: false,
		component: <NewOrder/>,
	},
];
