import React from 'react';
import ShopFooter from './components/ShopFooter/ShopFooter';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './redux/store'
import ShopHeader from './components/ShopHeader/ShopHeader';
import Home from './pages/Home/Home';
import ShopCategories from './pages/ShopCategories/ShopCategories';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ShopProduct from './pages/ShopProduct/ShopProduct';


const App=()=> {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ShopHeader/>
        <main className='bg-light' style={{color:'#42abca'}}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/categories/:key' component={ShopCategories}/>
            <Route exact path='/signin' component={SignIn}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/product/:id' component={ShopProduct}/>
            <Route exact path='/:random' component={Home}/>
          </Switch>
        </main>
        <ShopFooter/>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
