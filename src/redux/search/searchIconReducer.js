import { TOGGLE_SEARCH_ICON } from './searchIconAction'

const initialState = {
    search_dropdown: false
}

export const searchIconReducer =  (state = initialState, action) => {
    switch (action.type) {

    case TOGGLE_SEARCH_ICON:
        return { ...state, search_dropdown: !state.search_dropdown  }


    default:
        return state
    }
}

export default searchIconReducer; 