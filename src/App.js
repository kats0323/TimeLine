import React, {Component} from 'react';
import TimeLine from "./components/TimeLine"


export default class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
            term: '',
            items: []
        }
    }
    
    onChange = (event) => {
        this.setState({ term: event.target.value });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
        console.log(this.state)
      }


    render(){
       return(
           <div>
            <form onSubmit={this.onSubmit}>
                <input value={this.state.term} onChange={this.onChange} />
                <button>Submit</button>
            </form>
               <TimeLine items={this.state.items}/>
           </div>
       )

    }
}