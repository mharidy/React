import React, { Component } from "react";



//Class to display Data
class Item extends React.Component {

    render() {
        let { items } = this.props;
        let singleItems = items.map(item => {
            return (
                //<div key={Math.random()}> in case i don't have id in each object
                <div key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.id}</div>
                    <div>{item.age}</div>
                    <div>--------------</div>

                </div>
            )
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