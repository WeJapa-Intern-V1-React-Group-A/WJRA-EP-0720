import React from 'react';
import ShopFooter from './components/ShopFooter/ShopFooter';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './redux/store'
import ShopHeader from './components/ShopHeader/ShopHeader';


const App=()=> {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ShopHeader/>
        <ShopFooter/>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
