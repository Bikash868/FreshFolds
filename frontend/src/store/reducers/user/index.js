import produce from 'immer';

const initialState = {
	user: {
		name: '',
		email: '',
	},
};

const UserReducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		try {
			switch (action.type) {
				case 'SET_USER':
					draft.user = {
						...state.user,
					};
					break;
				default:
					break;
			}
		} catch (err) {
			console.log(err);
		}
	});
};

export default UserReducer;
