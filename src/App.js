import React, { Component } from 'react';
import TimeLine from "./components/TimeLine"


export default class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      user: '',
      items: []
    }
  }

  onChange = (event) => {
    this.setState({
      term: event.target.value,


    });
  }

  onChange1 = (event) => {
    this.setState({
      user: event.target.value,


    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      user: "",
      term: '',
      items: [...this.state.items, this.state.term, this.state.user]
    });
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <p></p>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.user} onChange={this.onChange1} />
          <p></p>
          <textarea value={this.state.term} onChange={this.onChange} ></textarea>
          <button>Submit</button>
        </form>
        <TimeLine items={this.state.items} />
      </div >
    )

  }
}