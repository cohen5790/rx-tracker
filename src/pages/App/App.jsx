import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import RxListPage from './pages/RxList/RxListPage.jsx';
import AddRxPage from './pages/AddRx/AddRxPage.jsx';


export default class App extends Component {
  render() {
    return (
      <main className="App">  
        App Page
        <Switch>    
          <Route path='/RxList' render={(props) => (
            <RxListPage {...props}/>
          )}/>
          <Route path='/AddRx' render={(props) => (
            <AddRxPage {...props}/>
          )}/>     
          <Redirect to="/RxList" />
        </Switch>
      </main>
    );
  }
}

