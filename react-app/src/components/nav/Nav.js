import React from "react";
import {Link,NavLink} from "react-router-dom";
import "./Nav.css"

//NavBar
class Nav extends React.Component {
    render() {
        return (
            //<Link to> --> like <a href> but preventDefaults() "prevents the page from reloading"
            //<NavLink to> --> like <Link to> but adds a class called "active" to the selected page, we can rename the active class by using activeClassName 
            <div className="ul-container">
                <ul>
                <NavLink activeClassName="selectedPage" exact to="/">Home</NavLink> 
                <NavLink activeClassName="selectedPage" to="/about">About</NavLink>
                <NavLink activeClassName="selectedPage" to="/users">Users</NavLink>
                </ul>
            </div>
        )
    }
}

export default Nav;