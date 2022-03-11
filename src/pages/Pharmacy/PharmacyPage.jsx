import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default class AddRxPage extends Component {

    render() {
        return(
            <div className='pharmInfo'>
                <NavBar />
                <UserLogOut />
                Pharm Info Page
            </div>
        );
    }
}
