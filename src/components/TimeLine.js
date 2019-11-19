import React, { Component } from "react"
import { Card } from "antd";



class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        const words = this.props.items;

            console.log(words)
        const listItem = words.map((word) =>
            <div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title={word.user} bordered={false} style={{ width: 300 }}>


                        <p key={word} >{word.term}</p>
                    </Card>
                </div>
            </div>
        );
        )


    }
}

export default TimeLine;