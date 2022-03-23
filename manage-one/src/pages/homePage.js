import React, { Component } from "react";
import './homePage.css';
import Navbar from "../Components/Navbar.js";
class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="homePage-body">
                    <div></div>
                </div>
            </div>
        )
    }
}
export default HomePage;