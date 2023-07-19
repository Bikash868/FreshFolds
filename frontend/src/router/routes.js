// eslint-disable-next-line no-unused-vars
import { Redirect } from 'react-router-dom';

import { BaseLayout } from '@layouts';
// import { LoginLayout } from '@layouts';
// import { LandingLayout } from '@layouts';

// import UserPage from '@views/UserPage';

export const Routes = [
	{
		path: '/',
		exact: true,
		layout: BaseLayout,
		private: true,
		component: () => <Redirect to="/dashboard" />,
	},
	{
		path: '/user',
		exact: true,
		// layout: LoginLayout, ::TODO
		private: false,
		// component: UserPage, ::TODO
	},
];
