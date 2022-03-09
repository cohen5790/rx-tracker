import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import RxListPage from '../RxList/RxListPage.jsx';
import AddRxPage from '../AddRx/AddRxPage.jsx';
import PharmacyPage from '../Pharmacy/PharmacyPage.jsx'


export default class App extends Component {
  render() {
    return (
      <main className="App"> 
        Header
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
      </main>
    );
  }
}

