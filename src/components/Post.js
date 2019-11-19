import React, { Component } from "react"
import { Button } from "antd";
import { Input } from "antd";
import TimeLine from "./TimeLine";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            term: '',
            items: []
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, { user: this.state.user, term: this.state.term }]
        });
    }

    render() {
        const form = {
            backgroundColor:"none",
            paddingLeft: "25%",
            paddingRight: "25%",
            paddingTop: "1%",
        };

        return (
            <div style={form}>
                <form onSubmit={this.onSubmit}>
                    <div style={{paddingTop:"1%"}}>
                        <Input placeholder="user" value={this.state.user} onChange={this.onChange} name="user" />
                    </div>
                    <div style={{paddingTop:"1%"}}>
                        <Input placeholder="Message" value={this.state.term} onChange={this.onChange} name="term" />
                    </div>
                    <div style={{ paddingTop: "20px" }}>
                        <Button htmlType="submit" size={"large"}>Submit</Button>
                    </div>
                </form>
                <TimeLine items={this.state.items} />
            </div>
        );
    }
}

export default Post;