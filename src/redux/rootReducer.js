import {combineReducers } from 'redux';


import sideMenuIconReducer from './sidemenu/sidemenuIconReducer';
import cartReducer from './cart/cartReducer';
import searchIconReducer from './search/searchIconReducer';
import favoritesReducer from './favorites/favoritesReducer';


export default combineReducers({
    sidebar: sideMenuIconReducer,
    cart: cartReducer,
    search: searchIconReducer,
    favs: favoritesReducer
}); 