import React,{Component} from "react";

//stateless Component --> arrow function to display the data
let child=(props)=>{
    
        return(
            <div>
                {props.valueFromProps.name}
            </div>
        )


}
export default child;