import React, { Component } from 'react'
import PharmInfo from '../../components/PharmInfo/PharmInfo';

export default class AddRxPage extends React.Component {

    render() {
        return(
            <>
                <nav className="nav">
                    <h1>Rx-Tracker</h1>
                    <Link>Rx Schedule</Link><br></br>
                    <Link>Pharmacy</Link><br></br>
                    <Link>Add Medication</Link><br></br>
                    <Link>Log Out</Link><br></br>
                </nav>
                Pharm Info Page
            </>
        );
    }
}
