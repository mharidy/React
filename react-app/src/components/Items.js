import React, { Component } from "react";



//Class to display Data
class Item extends React.Component {

    render() {
        let { items } = this.props;
        let singleItems = items.map(item => {
            return (
                <div>
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