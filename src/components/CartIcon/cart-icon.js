import React from 'react'; 
import {connect} from 'react-redux';

import {BsBag} from 'react-icons/bs';

import { toggleCartOpen } from '../../redux/cart/cartActions';

import './cart-icon.scss';

const CartIcon = ({toggleCartOpen}) => (
    <div className='cart-icon-container' onClick={toggleCartOpen}>
        <BsBag className='shopping-icon' size={30} />
        <span className='item-count'>0</span>

    </div>
)

const mapDispatchToProps = dispatch =>(
    {
        toggleCartOpen: ()=>dispatch(toggleCartOpen())
    })

export default connect(null,mapDispatchToProps)(CartIcon); 