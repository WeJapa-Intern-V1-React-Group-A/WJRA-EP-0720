import { TOGGLE_CART } from './cartActions'

const initialState = {
    cart_dropdown: false
}

export const cartReducer =  (state = initialState, action) => {
    switch (action.type) {

    case TOGGLE_CART:
        return { ...state, cart_dropdown: !state.cart_dropdown  }


    default:
        return state
    }
}

export default cartReducer; 