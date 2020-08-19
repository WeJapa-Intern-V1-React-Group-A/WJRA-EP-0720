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
{/* top nav split in 3 divs, one contains search and navbar icons, 
another contains title and last one contains favorite 
and cart icons and sign in and register*/}

            <div className="shopheader-container">
                
                {/* search and side navbar icons (both are imported as components so as to t
                    rigger rending Search and SideMenu components*/}
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

                {/* start of second div. Contains title*/}
                <div className="title-nav">
                    <Link to='/'> <span> IDEAL OF 9JA </span> </Link>
                </div>

                    {/* start of last div */}
                <div className="logo-nav"> 
                  
                  {/* added a conditional statement (that will be modified later on) 
                  for displaying of SIGN OUT or SIGN IN & REGISTER. 
                  If user is logged in, only SIGNOUT will be rendered*/}
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
            {/* shopnav component is imported to display secondary navs*/}
            <ShopNav />
 
        </div>
    )
}

{/* states brought in from redux store. They all toggle dropdown of components. 
Each state item has a reducer listed in rootReducer.js. rootReducer is then passed to store.js */}
const mapStateToProps = ({cart:{cart_dropdown}, search:{search_dropdown}, sidebar:{sidebar_dropdown}, favs:{favs_dropdown}})=>(
    { cart_dropdown,
        search_dropdown,
        sidebar_dropdown,
        favs_dropdown
     }
)

export default connect(mapStateToProps)(ShopHeader)

