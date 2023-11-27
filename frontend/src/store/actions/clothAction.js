import * as actionTypes from '@store/actionTypes';

export const updateCloths = (params) => {
	return {
		type: actionTypes.UPDATE_CLOTH_LIST,
		payload: params,
	};
};

export const updatePrice = (params) => {
	return {
		type: actionTypes.UPDATE_PRICE,
		payload: params,
	};
};