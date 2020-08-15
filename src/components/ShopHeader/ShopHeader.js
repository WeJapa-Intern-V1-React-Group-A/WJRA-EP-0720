import React from 'react'
import ShopNav from '../ShopNav/ShopNav';
import {FiMenu, FiSearch, FiChevronDown, FiHeart} from 'react-icons/fi';
import {RiShoppingBagLine} from 'react-icons/ri';

function ShopHeader() {
    return (
        <div className="shopheader-container">
            <header>
            <div>
                <div>
                 <FiMenu />
                <FiSearch />
                </div>
                <div>
                    IDEAL OF 9JA
                </div>
                <div>
                   <p> iPhone11 Pro <FiChevronDown /></p>
                    <FiHeart />
                    <RiShoppingBagLine />
                </div>
            </div>
            <div>
            <ShopNav/>
            </div>
                      
        </header> 
        </div>
    )
}

export default ShopHeader

