import React, { Component } from 'react';

export default class RxListPage extends Component {

    render() {
        return(
            <div className="RxList">
                <nav className="nav">
                    <h1>Rx-Tracker</h1>
                    <Link>Rx Schedule</Link><br></br>
                    <Link>Pharmacy</Link><br></br>
                    <Link>Add Medication</Link><br></br>
                    <Link>Log Out</Link><br></br>
                </nav>
                Rx List Page
            </div>
        );
    }
}
