import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default class RxListPage extends Component {

    render() {
        return(
            <div className="RxList">
                <NavBar />
                <UserLogOut />
                
            </div>
        );
    }
}
