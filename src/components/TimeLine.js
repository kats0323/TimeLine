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
                <p key={word.user} >{word.user}</p>

                <p key={word.term} >{word.term}</p>
            </div>
        )
        const newlistItem = listItem.reverse()
        return (
            <div style={{paddingTop:"5%"}}>
                <Card bordered={false} style={{ width: "100%", borderRadius:"12px" }}>
                    {newlistItem}
                </Card>

            </div >
        );
    }
}





export default TimeLine;