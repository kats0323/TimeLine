import React, {Component} from 'react';
import './App.css';
import Post from './components/Post'
import TimeLine from './components/Post'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Post />
        <Timeline />
      </div>

     );
  }
}
 
export default App;

export default App;
