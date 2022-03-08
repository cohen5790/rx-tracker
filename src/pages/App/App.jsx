import { render } from '@testing-library/react';
import { Component } from 'react'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <link to="rxList">Rx List</link>
        </nav>
      </main>
    );
  }
}

