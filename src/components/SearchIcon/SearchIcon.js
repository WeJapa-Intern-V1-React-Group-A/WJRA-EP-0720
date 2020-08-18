import React from 'react';
import {connect} from 'react-redux';

import { FiSearch} from 'react-icons/fi';

import {toggleSearch} from '../../redux/search/searchIconAction';

const SearchIcon = ({toggleSearch}) =>(
    <div >
        <FiSearch size={22} onClick={toggleSearch}/>
    </div>
);
 
const mapDispatchToProps = dispatch =>(
    {
        toggleSearch: ()=>dispatch(toggleSearch())
    }
)

export default connect(null, mapDispatchToProps)(SearchIcon); 