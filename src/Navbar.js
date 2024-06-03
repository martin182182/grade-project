import { Component } from "react";
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render(){
        return (
            <nav className="blue darken-2">
            <div className="nav-wrapper ">
            <span className="brand-logo center"><Link to="/">Logo</Link></span>
            </div>
            </nav>
        );
    }
}

export default Navbar;

