// Code EyesOnMe Component Here

import React, { Component } from 'react';



export default class EyesOnMe extends Component {

    render(){

        return(
            <div>
                <button onFocus={()=>{console.log("onfocus")}} onBlur={()=>{console.log("on blur")}}>Button</button>
            </div>
        )
    }

}