import React from 'react';
import {connect} from 'react-redux';

import {FiHeart} from 'react-icons/fi';

import {toggleFav} from '../../redux/favorites/favoritesAction'; 

const FavoritesIcon = ({toggleFav}) =>(
    <div>
            <FiHeart size={22} onClick={toggleFav}/>
    </div>
)

const mapDispatchToProps = dispatch =>({

        toggleFav: ()=> dispatch(toggleFav())
})

export default connect(null, mapDispatchToProps)(FavoritesIcon);