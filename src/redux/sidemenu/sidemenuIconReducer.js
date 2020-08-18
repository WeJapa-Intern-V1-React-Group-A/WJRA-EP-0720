import { TOGGLE_OPEN } from './sidemenuIconAction'

const initialState = {
    sidebar_dropdown: false
}

export const sidemenuIconReducer = (state = initialState, action) => {
    switch (action.type) {

    case TOGGLE_OPEN:
        return { ...state, sidebar_dropdown: !state.sidebar_dropdown  }

    default:
        return state
    }
}

export default sidemenuIconReducer;  