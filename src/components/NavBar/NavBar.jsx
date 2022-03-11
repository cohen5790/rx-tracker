import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default class NavBar extends Component {

    render() {
        return(
            
                <nav className="nav">
                    <h1>Rx-Tracker</h1>
                    <Link className="navLink" to="/RxList">Rx Schedule</Link><br></br>
                    <Link className="navLink" to="/Pharmacy">Pharmacy</Link><br></br>
                    <Link className="navLink" to="/AddRx">Add Medication</Link><br></br>
                    <UserLogOut />
                </nav>
                
            
        );
    }
}
