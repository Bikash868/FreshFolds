import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useState } from '@utils/hooks/useState';
import { selectAuthStatus } from '@store/selectors/session';
import { selectIfSkipLoginRedirect } from '@store/selectors/session';
import { selectSessionRestorationStatus } from '@store/selectors/session';

import FullScreenLoader from '@components/FullScreenLoader';

const PrivateRoute = (props) => {
	const canRender = useState(false);
	const isAuthenticated = useSelector(selectAuthStatus);
	const restoringSession = useSelector(selectSessionRestorationStatus);
	const skipLoginRedirect = useSelector(selectIfSkipLoginRedirect);

	React.useEffect(() => {
		if (!restoringSession) {
			canRender.set(true);
		}
	}, [restoringSession, isAuthenticated]);

	if (!canRender.value) {
		return <FullScreenLoader />;
	} else {
		if (!props.private) {
			if (isAuthenticated) {
				return <Redirect to="/" />;
			} else {
				return props.orRender;
			}
		} else {
			if (isAuthenticated) {
				return props.orRender;
			} else {
				return !skipLoginRedirect ? <Redirect to="/login" /> : <FullScreenLoader />;
			}
		}
	}
};

PrivateRoute.propTypes = {
	orRender: PropTypes.element,
	private: PropTypes.bool,
};

export default PrivateRoute;
