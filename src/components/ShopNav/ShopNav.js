import React from 'react'
import {Link} from 'react-router-dom'

import './shopnav.style.scss';

function ShopNav() {
    return (
        <div className="shopnav-container">
            <div className='side-item'>
               <Link> FOR HER</Link>
            </div>
            <div className='shop-navigation'>
                    <ul>
                      <Link to='/categories/tops'> 
                        <li>TOPS</li>
                      </Link>  
                      <Link to='/categories/trousers'>
                        <li>PANTS</li>
                      </Link>
                      <Link to='/categories/skirts'>
                        <li>SKIRTS</li>
                      </Link>
                      <Link to='/categories/outfits'>
                        <li>OUTFITS</li>
                      </Link>
                      <Link to='/categories/otherwears'>
                        <li>OTHER WEARS</li>
                      </Link>
                      <Link to='/categories/shoes'>
                        <li>SHOES</li>
                      </Link>
                      <Link to='/categories/accessories'>
                      <li>ACCESSORIES</li>
                      </Link> 
                    
                    </ul>
            </div>

            <div className='side-item'>
               <Link> TRACK ORDER</Link>
            </div>
        </div>
        
    )
}

export default ShopNav
