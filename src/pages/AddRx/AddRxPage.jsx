import React, { Component } from 'react'
import './AddRxPage.css';
import NavBar from '../../components/NavBar/NavBar';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import AddRxForm from '../../components/AddRxForm/AddRxForm'

export default class AddRxPage extends Component {




    render() {
        return(
            <div className="addRx">
                <NavBar />
                <UserLogOut />
                <AddRxForm setUserInState={this.props.setUserInState} user={this.props.user}/>
            </div>
        );
    }
}
