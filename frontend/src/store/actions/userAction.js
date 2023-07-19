import * as actionTypes from '@store/actionTypes';

export const setUser = (params) => {
	return {
		type: actionTypes.SET_USER,
		payload: params,
	};
};
