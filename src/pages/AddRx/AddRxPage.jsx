import React, { Component } from 'react'

export default class AddRxPage extends Component {

    render() {
        return(
            <div className="addRx">
                <nav className="nav">
                    <h1>Rx-Tracker</h1>
                    <Link>Rx Schedule</Link><br></br>
                    <Link>Pharmacy</Link><br></br>
                    <Link>Add Medication</Link><br></br>
                    <Link>Log Out</Link><br></br>
                </nav>
                Add Rx Page
            </div>
        );
    }
}
