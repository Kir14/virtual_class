import React from 'react';
import {Component} from "react";

export default class ChildComponent extends Component {

    sendMessage=(data)=>{
        const {websocket} = this.props; // websocket instance passed as props to the child component.

        try {
            websocket.send(data) //send data to the server
        } catch (error) {
            console.log(error) // catch error
        }
    }
    render() {
        return (
            <div>
                ........
            </div>
        );
    }
}
