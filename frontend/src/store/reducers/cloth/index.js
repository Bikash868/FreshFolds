// import produce from 'immer';


export function getInitialState() {

    const initialState = {
        clothList: [],
        price: {
            subTotal: 0,
            taxAmount: 0,
            pickupCharge: 0,
            deliveryCharge: 0,
            total:0,
        }
    }

    return initialState;
}

const ClothReducer = (state = getInitialState(), action) => {
    const {payload} = action;
    try {
        switch(action.type) {
            case 'UPDATE_CLOTH_LIST':
                return {
                    ...state,
                    clothList: payload
                }
            case 'UPDATE_PRICE':
                return {
                    ...state,
                    price: {...state.price,...payload}
                }
            default:
                return state;
        }

    } catch (err) {
        console.log(err)
    }
    // return produce(state, () => {
    // })
}

export default ClothReducer;