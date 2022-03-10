import React, { Component } from 'react'
import './AddRxPage.css';
import NavBar from '../../components/NavBar/NavBar';
import AddRxForm from '../../components/AddRxForm/AddRxForm'

export default class AddRxPage extends Component {

    // async function handleAddToList(itemId) {
    //     const cart = await ordersAPI.addItemToCart(itemId);
    //     setCart(cart);
    // }


    render() {
        return(
            <div className="addRx">
                <NavBar />
                Add Rx Page
                <AddRxForm />
            </div>
        );
    }
}
