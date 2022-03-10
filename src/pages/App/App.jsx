import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import RxListPage from '../RxList/RxListPage.jsx';
import AddRxPage from '../AddRx/AddRxPage.jsx';
import PharmacyPage from '../Pharmacy/PharmacyPage.jsx';
import AuthPage from '../AuthPage/AuthPage.jsx';
import { user } from 'pg/lib/defaults';



export default class App extends Component {

  state = {
    user:null,
  }
  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  // when the page refreshes, check localStorage for the user jwt token
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // decode token
      if (payload.exp < Date.now() / 1000) {  // Check if our token is expired, and remove if it is (standard/boilerplate)
        localStorage.removeItem('token');
        token = null;
      } else { // token not expired! our user is still 'logged in'. Put them into state.
        let userDoc = payload.user // grab user details from token
        this.setState({user: userDoc})      
      }
    }
  }


  render() {
    return (
      <main className="App">
      { user ?
          <Switch>    
            <Route path='/RxList' render={(props) => (
              <RxListPage {...props}/>
            )}/>
            <Route path='/AddRx' render={(props) => (
              <AddRxPage {...props}/>
            )}/>
            <Route path='/Pharmacy' render={(props) => (
              <PharmacyPage {...props}/>
            )}/>
            <Redirect to="/RxList" />
          </Switch>
          :
          <AuthPage setUserInState={this.setUserInState}/>
        }
      </main>
    );
  }    
}
  

