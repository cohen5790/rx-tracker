import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RxListPage from './RxList/RxListPage';
import AddRxPage from './AddRx/AddRxPage';
import PharmacyPage from './Pharmacy/PharmacyPage'
import { Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <main className="App">  
        <Switch>    
          <Route path='/RxList' render={(props) => (
            <RxListPage {...props}/>
          )}/>
          <Route path='/AddRx' render={(props) => (
            <AddRxPage {...props}/>
          )}/>
          <Route path='/PharmacyInfo' render={(props) => (
            <PharmacyPage {...props}/>
          )}/>        
          <Redirect to="/RxList" />
        </Switch>
      </main>
    );
  }
}

