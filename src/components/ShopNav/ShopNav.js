import React from 'react'
import {Link} from 'react-router-dom'

import './shopnav.style.scss';

function ShopNav() {
    return (
      /* top div is split into 3 main divs*/
        <div className="shopnav-container">

          {/* start of first div. floats to the left*/}
            <div className='side-item'>
               <Link> FOR HER</Link>
            </div>

            {/* second div. contains nav items*/}
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
            
        {/* start of last div */}
            <div className='side-item'>
               <Link> TRACK ORDER</Link>
            </div>
        </div>
        
    )
}

export default ShopNav
