import React from 'react';
import ShopFooter from './components/ShopFooter/ShopFooter';
import { BrowserRouter } from 'react-router-dom'
import ShopHeader from './components/ShopHeader/ShopHeader';


const App=()=> {
  return (
    <BrowserRouter>
      <ShopHeader/>
      <ShopFooter/>
    </BrowserRouter>
  );
}

export default App;
