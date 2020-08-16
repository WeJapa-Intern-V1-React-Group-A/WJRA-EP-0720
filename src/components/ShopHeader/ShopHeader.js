import React from 'react'
import {Link} from 'react-router-dom'


import ShopNav from '../ShopNav/ShopNav';


import {FiMenu, FiSearch, FiChevronDown, FiHeart} from 'react-icons/fi';
import {RiShoppingBagLine} from 'react-icons/ri';

import './shopheader.style.scss';

const ShopHeader = () => {
    return (
        <div className="shopcontainer">
            
            <div className="shopheader-container">
                <div className='logo-nav'>
                    <Link className='logo'>
                        <FiMenu size={22} />
                    </Link>

                    <Link className='logo'>
                    <FiSearch size={22} />
                    </Link>
                </div>

                <div className="title-nav">
                    <Link to='/'> <span> IDEAL OF 9JA </span> </Link>
                </div>

                <div className="logo-nav"> 
                  
                  {(2===3) ? <div> SIGNOUT</div> :  (<div ><Link to='/signin'>
                      <span > SIGN IN </span> </Link> 
                      <Link to='/signup' > <span> REGISTER </span></Link></div>) }
                    
           
                  <Link className='logo'>
                    <FiHeart size={22}  />
                  </Link>
                    
                    <Link className='logo'>
                        <RiShoppingBagLine size={22} />
                    </Link>
                </div>
            </div>
            <ShopNav />
 
        </div>
    )
}

export default ShopHeader

