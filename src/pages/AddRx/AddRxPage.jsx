import React, { Component } from 'react'
import './AddRxPage.css';
import AddRxForm from '../../components/AddRxForm/AddRxForm'

export default class AddRxPage extends Component {




    render() {
        return(
            <div className="addRx">                
                <AddRxForm setUserInState={this.props.setUserInState} user={this.props.user}/>
            </div>
        );
    }
}
