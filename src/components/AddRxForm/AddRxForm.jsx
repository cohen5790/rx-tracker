import "./AddRxForm.css"
import React, { Component } from "react";

export default class AddRxPage extends Component {
  state = {
    RxList: [],
    name: "enter medication name",
    dosage: "enter dose",
    perdiem: "1"
  };
  
  // fetch/axios request with the MedObj in req.body
  // async/await or .then()
  // fetch all new data from db
  // set that new data to state
  addRxtoList = async (evt) => {
    evt.preventDefault();
    let MedObj = {
      name: this.state.name,
      dosage: this.state.dosage,
      perdiem: this.state.perdiem
    };
    try {
    const fetchResponse = await fetch('/api/AddRx', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name: this.state.name, dosage: this.state.dosage, perdiem: this.state.perdiem})
    })
    if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
    
    let RxList = [...this.state.RxList, MedObj];
    this.setState({ RxList, name: "enter medication name", dosage: "enter dose", perdiem: 1 });
    console.log(RxList); 

  } catch (err) {
    console.log("addRX error", err)
    this.setState({ error: 'Add Medication Failed - Try Again' });
  }
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
        {this.state.RxList.map((obj) => (
          <article key={obj.name}>
            <div>{obj.name}</div> <div>{obj.dosage}</div>{" "}
            <div>{obj.perdiem} times a day</div>
          </article>
        ))}
        <hr />
        <form onSubmit={this.addRxtoList}>
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
