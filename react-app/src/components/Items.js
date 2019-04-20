import React,{Component} from "react";



//Class to display Data
class Item extends React.Component{
    
    render(){
        let {items}=this.props;
        let singleItems=items.map(item=>{
            return(
                <div>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.age}</p>
                </div>
            )
        })
        
        return(
            <div>
                <p>Testing Paragraph</p>
                {singleItems}
                

            </div>
        )
    }
    
}

/*let item=(props)=>{
    const {name,id,age}=props;
    return(
        <div>
            {id}
                {name}
                {age}
        </div>
    )
}*/

export default Item;