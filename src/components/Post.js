import React, {Component} from "react"
import {Button} from "antd";
import {Input} from "antd";
import TimeLine from "./TimeLine";

class Post extends Component {
    constructor(props) {
        super(props);
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
    }

    render() { 
        const form = {
            paddingLeft:"25%",
            paddingRight:"25%",
            paddingTop:"1%",
        };

        return ( 
            <div style={form}>
                <form onSubmit={this.onSubmit}>
                <Input value={this.state.term} onChange={this.onChange} />
                    <div style={{paddingTop:"20px"}}>
                        <Button type="danger" size={"20px"}>Submit</Button>
                    </div>
                </form>
                <TimeLine items={this.state.items}/>
            </div>
         );
    }
}
 
export default Post;