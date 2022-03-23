import { Component } from "react";
import './Navbar.css';
class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="Navbar-Container">
                    <span className="logo">ManageOne</span>
                    <ul className="Navbar-Items">
                        <li className="Items nav"><img src="../assets/profile.svg" /></li>
                        <li className="Items">Guest</li>
                        <li className="Items">Home</li>
                        <li className="Items">About us</li>
                        <li className="Items">Contact us</li>
                        <li className="Items login">Login</li>
                        <li className="Items sinup">Sinup</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;