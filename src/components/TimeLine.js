import React, { Component } from "react"
import { Card } from "antd";


class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const words = this.props.items;
        console.log(words)
        const listItem = words.map((word) =>
            <li>{word}</li>
        );
        const listing = listItem.reverse()

        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card bordered={false} style={{ width: 300 }}>

                    <li>{listing}</li>

                </Card>
            </div>
        )

    }
}

export default TimeLine;