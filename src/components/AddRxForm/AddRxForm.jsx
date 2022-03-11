import "./AddRxForm.css"
import React, { Component } from "react";

export default class AddRxPage extends Component {
  state = {
    RxList: [],
    name: "enter medication name",
    dosage: "enter dose",
    perdiem: "1"
  };
  
  addRxToList = async (evt) => {
    evt.preventDefault();
    let MedObj = {
      name: this.state.name,
      dosage: this.state.dosage,
      perdiem: this.state.perdiem
    };
    let token;
    try {
    let jwt = localStorage.getItem('token')
    const fetchResponse = await fetch('/api/RxList', {
      method: 'POST',
      headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + jwt},
      body: JSON.stringify(MedObj)
    })
    
    if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

    token = await fetchResponse.json()
    const payload = JSON.parse(atob(token.split('.')[1]));
      console.log(token, payload)
    let userDoc = payload.updatedUser 
    this.props.setUserInState(userDoc)
      console.log(userDoc)
    localStorage.removeItem('token')
    localStorage.setItem('token', token); 
    } catch (err) {
    console.log("addRX error", err)
    this.setState({ error: 'Add Medication Failed - Try Again' });
  }
    
    let RxList = [...this.state.RxList, MedObj];
    this.setState({ RxList, name: "enter medication name", dosage: "enter dose", perdiem: 1 });
    console.log(RxList);
      console.log(MedObj);    
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <section>
        <h2>Medication List</h2>
        <hr />
        { this.props.user ?
        this.props.user.RxList.map((obj) => (
          <article key={obj.name}>
            <div>{obj.name}</div> <div>{obj.dosage}</div>{" "}
            <div>{obj.perdiem} times a day</div>
          </article>
        ))
        :
        ""
        }
        <hr />
        <form onSubmit={this.addRxToList}>
          <main className="RxList">
            <label>
              <span>Name:</span>
              <input
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <span>Dosage: </span>
              <input
                name="dosage"
                value={this.state.dosage}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <span>Times A Day</span>
              <select
                name="perdiem"
                value={this.state.perdiem}
                onChange={this.handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </label>
          </main>
          <button>Add Rx</button>
        </form>
      </section>
    );
  }
}
