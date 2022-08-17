import React from "react";

function Header() {
    return (
        <div className="nav">
            <div className="logo">
                <h1>
                    React Tutorial
                </h1>
            </div>
            <div className="menu">
                <ul>
                    <li href="" className="active">Home</li>
                    <li href="">About</li>
                    <li href="">Gallery</li>
                    <li href="">Login</li>
                </ul>
            </div>

        </div>
    );
}
export default Header;