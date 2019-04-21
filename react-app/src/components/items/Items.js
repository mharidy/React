import React, { Component } from "react";
//import css file
import "./Items.css"


//Class to display Data
class Item extends React.Component {

    render() {
        let { items } = this.props;
        let singleItems = items.map(item => {

            //Ecma 6 if Condition
            return item.id > 1 ? (
                //<div key={Math.random()}> in case i don't have id in each object

                <div className="item" key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.id}</div>
                    <div>{item.age}</div>
                    <div>--------------</div>

                </div>

            ) : <p key={Math.random()}>this item "{item.name}" is bigger than 1</p>
        })
        return (
            <div>
                <p>Testing Paragraph</p>
                {singleItems}



            </div>
        )
    }

}
export default Item;