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
            <div>
                <p key={word} >{word.user}</p>

                <p key={word} >{word.term}</p>
            </div>
        )
        return (
            <div style={{padding: '30px' }}>
                <Card bordered={false} style={{ width: 300 }}>
                    {listItem}
                </Card>

            </div >
        );
    }
}





export default TimeLine;