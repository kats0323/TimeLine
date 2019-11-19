import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Post from "./components/Post";
import './App.css';
export default class Parent extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    const body = {
      backgroundColor:"#001529",
      height:"100vh",
    }
    return (
      <div className="App" style={body} >
        <Post/>
      </div>
    )
  }
}
