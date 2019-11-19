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
            user: '',
            term: '',
            items: [...this.state.items, { user: this.state.user, term: this.state.term }]
        });
        console.log("submit", this.state.items)
    }

    render() {
        const form = {
            paddingLeft: "25%",
            paddingRight: "25%",
            paddingTop: "1%",
        };

        return (
            <div style={form}>
                <form onSubmit={this.onSubmit}>
                    <Input value={this.state.user} onChange={this.onChange} name="user" />
                    <Input value={this.state.term} onChange={this.onChange} name="term" />
                    <div style={{ paddingTop: "20px" }}>
                        <Button type="danger" htmlType="submit" size={"20px"}>Submit</Button>
                    </div>
                </form>
                <TimeLine items={this.state.items} />
            </div>
        );
    }
}

export default Post;