// Code Keypad Component Here
import React, { Component } from 'react';


export default class Keypad extends Component {

    handleKeyUp = ()=>{
        console.log("Entering Password...")
    }
    render(){

        return(
            <div>
                <input onKeyUp={this.handleKeyUp} type="text"></input>
            </div>
        )
    }


}