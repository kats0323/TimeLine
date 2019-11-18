import React, { Component } from 'react';
import './App.css';
import Post from './components/Post'
import TimeLine from './components/TimeLine'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Post />
        <TimeLine />
      </div>

    );
  }
}

export default App;
