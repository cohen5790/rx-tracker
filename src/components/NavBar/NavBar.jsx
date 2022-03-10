import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

    render() {
        return(
            
                <nav className="nav">
                    <h1>Rx-Tracker</h1>
                    <Link to="/RxList">Rx Schedule</Link><br></br>
                    <Link to="/Pharmacy">Pharmacy</Link><br></br>
                    <Link to="/AddRx">Add Medication</Link><br></br>
                </nav>
                
            
        );
    }
}
