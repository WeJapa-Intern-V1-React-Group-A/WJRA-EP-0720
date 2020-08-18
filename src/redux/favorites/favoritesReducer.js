import {TOGGLE_FAVS} from './favoritesAction';

const Initialstate = {
    favs_dropdown: false
}

export const favoritesReducer = (state = Initialstate, action) =>{
    switch(action.type){

        case TOGGLE_FAVS: 
        return {...state, favs_dropdown: !state.favs_dropdown}

        default: 
        return state
    }
}

export default favoritesReducer;