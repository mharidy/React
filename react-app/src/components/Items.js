import React,{Component} from "react";


/*
//Class to display Data
class Item extends React.Component{
    
    render(){
        const {name,id,age}=this.props;
        return(
            <div>
                <p>Testing Paragraph</p>
                {id}
                {name}
                {age}
            </div>
        )
    }
    
}*/

let item=(props)=>{
    const {name,id,age}=props;
    return(
        <div>
            {id}
                {name}
                {age}
        </div>
    )
}

export default item;