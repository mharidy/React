import axios from "axios";
import React from "react";
//importing Css File
import "./User.css"

//this component should be state component because it will render a rsult and change state values
class Users extends React.Component {

    //creating an empty state
    state = {
        usersState: []
    }

    // Create get HTTP request by using axios after the loading the Component "like domContentLload"
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            this.setState({
                usersState: res.data
            });

        })
    }
    
    //render the Component
    render() {
        return (
            <div >
                <h1>Users</h1>
                {this.state.usersState.map((user) =>
                    <div className="user-container" key={user.id}>
                        <div>{user.id}</div>
                        <div>{user.name}</div>
                    </div>
                )}
            </div>
        )
    }
}

export default Users;