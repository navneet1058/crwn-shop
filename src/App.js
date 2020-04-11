import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import { auth } from './firebase/firebase.utiities';

class App extends React.Component {
  unsubscribeFromAuth = null
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' >
              <HomePage />
            </Route>
            <Route path='/shop'>
              <ShopPage />
            </Route>
            <Route path='/signin'>
              <SignInAndSignUpPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
