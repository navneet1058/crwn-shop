import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' >
            <HomePage />
          </Route>
          <Route path='/shop'>
            <ShopPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
