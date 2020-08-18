import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import { toggleCartOpen } from '../../redux/cart/cartActions';
import { toggleSearch } from '../../redux/search/searchIconAction';

import ShopNav from '../ShopNav/ShopNav';
import CartDropdown from '../CartDropdown/CartDropdown';
import SideMenu from '../../components/SideMenu/SideMenu';
import SearchIcon from '../../components/SearchIcon/SearchIcon'
import Search from '../../components/Search/Search';
import FavoritesIcon from '../../components/FavoritesIcon/FavoritesIcon';

import SideMenuIcon from './../../components/SideMenuIcon/SideMenuIcon'; 




import './shopheader.style.scss';
import CartIcon from '../CartIcon/cart-icon';
import FavoriteItems from '../FavoriteItems/FavoriteItems';


const ShopHeader = ({cart_dropdown, search_dropdown, sidebar_dropdown, favs_dropdown}) => {


    return (
        <div className="shopcontainer">
            
            <div className="shopheader-container">
                <div className='logo-nav'>
                    
                        <div className='h-logo'>
                            <SideMenuIcon />
                            {sidebar_dropdown ? <SideMenu /> : null}
                        </div>
                        
                       <div className='h-logo'>
                        <SearchIcon />
                        { search_dropdown ?  <Search /> : null}
                       </div>
                </div>


                <div className="title-nav">
                    <Link to='/'> <span> IDEAL OF 9JA </span> </Link>
                </div>


                <div className="logo-nav"> 
                  
                  {(2===3) ? <span> SIGNOUT</span> :  (<div className='sign-in-register' ><Link to='/signin'>
                      <span > SIGN IN </span> </Link> 
                      <Link to='/signup' > <span> REGISTER </span></Link></div>) }
                    
           
                  <div className='h-logo'>
                    < FavoritesIcon  />
                    {favs_dropdown? <FavoriteItems /> : null }
                  </div>
                    
                    <div className='h-logo' >
                        <CartIcon />
                         { cart_dropdown ? <CartDropdown /> : null}
                    </div>
                </div>
            </div>
            
            <ShopNav />
 
        </div>
    )
}

const mapStateToProps = ({cart:{cart_dropdown}, search:{search_dropdown}, sidebar:{sidebar_dropdown}, favs:{favs_dropdown}})=>(
    { cart_dropdown,
        search_dropdown,
        sidebar_dropdown,
        favs_dropdown
     }
)

export default connect(mapStateToProps)(ShopHeader)

