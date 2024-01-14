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

export const updateCustomer = (params) => {
	return {
		type: actionTypes.UPDATE_CUSTOMER_DETAILS,
		payload: params,
	};
};

export const resetOrderDetails = () => {
	return {
		type: actionTypes.RESET_ORDER,
	};
};

export const updateOrderDate = (params) => {
	return {
		type: actionTypes.UPDATE_ORDER_DATE,
		payload: params,
	};
};

export const updateDeliveryDate = (params) => {
	return {
		type: actionTypes.UPDATE_DELIVERY_DATE,
		payload: params,
	};
};
