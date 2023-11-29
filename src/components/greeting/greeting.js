import React from "react";

export class Greeting extends React.Component {
    render () {
        return (
           <div>{this.props.userName}</div>
    )
    }
}