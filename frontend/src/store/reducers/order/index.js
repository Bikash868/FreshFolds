// import produce from 'immer';

export function getInitialState() {
	const initialState = {
		clothList: [],
		price: {
			normalWash:0,
			dryClean: 0,
			subTotal: 0,
			taxAmount: 0,
			pickupCharge: 0,
			deliveryCharge: 0,
			total: 0,
		},
		customer: {
			name: '',
			phone: '',
			flat: '',
			apartment: '',
			pin: '',
			country: 'India',
			city: '',
		},
		orderDate: '',
		expDeliveryDate: '',
	};

	return initialState;
}

const OrderReducer = (state = getInitialState(), action) => {
	const { payload } = action;
	const initialState = getInitialState();
	try {
		switch (action.type) {
			case 'UPDATE_CLOTH_LIST':
				return {
					...state,
					clothList: payload,
				};
			case 'UPDATE_PRICE':
				return {
					...state,
					price: { ...state.price, ...payload },
				};
			case 'UPDATE_CUSTOMER_DETAILS':
				return {
					...state,
					customer: { ...state.customer, ...payload },
				};
			case 'UPDATE_ORDER_DATE':
				return {
					...state,
					orderDate: payload,
				};
			case 'UPDATE_DELIVERY_DATE':
				return {
					...state,
					expDeliveryDate: payload,
				};
			case 'RESET_ORDER':
				return {
					...initialState,
				};
			default:
				return state;
		}
	} catch (err) {
		console.log(err);
	}
	// return produce(state, () => {
	// })
};

export default OrderReducer;
