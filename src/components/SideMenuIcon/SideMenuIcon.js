import React from 'react';
import {connect} from 'react-redux'; 
import {FiMenu} from 'react-icons/fi';

import {toggleSidebar} from '../../redux/sidemenu/sidemenuIconAction'; 

const SideMenuIcon = ({toggleSidebar}) => (

    <div>
        <FiMenu size={22} onClick={toggleSidebar}/>
    </div>

);

const mapDispatchToProps = dispatch => (
    {
        toggleSidebar: ()=>dispatch(toggleSidebar())
    }
)

export default connect(null, mapDispatchToProps)(SideMenuIcon); 