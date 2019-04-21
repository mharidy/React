import React from "react";
import {Link,NavLink} from "react-router-dom";

//NavBar
class Nav extends React.Component {
    render() {
        return (
            //<Link to> --> like <a href> but preventDefaults() "prevents the page from reloading"
            //<NavLink to> --> like <Link to> but adds a class called "active" to the selected page, we can rename the active class by using activeClassName 
            <div>
                <ul>
                <NavLink activeClassName="selectedHome" exact to="/">Home</NavLink>
                <NavLink activeClassName="selectedAbout" to="/about">About</NavLink>
                </ul>
            </div>
        )
    }
}

export default Nav;