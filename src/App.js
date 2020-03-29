import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path='/' >
          <HomePage />
        </Route>
        <Route path='/shop'>
          <ShopPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
