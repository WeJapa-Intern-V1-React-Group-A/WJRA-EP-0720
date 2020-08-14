import { TOGGLE_CLOSE, TOGGLE_OPEN } from './SideBarAction'
const initialState = {
    open: false
}

export default (state = initialState, { type }) => {
    switch (type) {

    case TOGGLE_OPEN:
        return { ...state, open:true }

        case TOGGLE_CLOSE:
            return { ...state, open:false }

    default:
        return state
    }
}
