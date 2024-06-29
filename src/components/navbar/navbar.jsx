import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../images/logo.png";
// const Menu = () => {
//     <>
//         <p> <a href="#home">Home</a> </p>
//         <p> <a href="#news">News</a> </p>
//         <p> <a href="#gold">Gold Prices</a> </p>
//         <p> <a href="#rates">Exchange Rates</a> </p>
//         <p> <a href="/">About Us</a> </p>
//     </>
// }
const Navbar = () => {
    // This is a functional component
    const [toggleMenu, setMenu] = useState(false); // to show and hide the menu for mobile view
    return (
        <div className="egy__navbar">
            <div className="egy__navbar-links">
                <div className="egy__navbar-links-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="egy__navbar-links-list">
                    <p> <a href="#home">Home</a> </p>
                    <p> <a href="#news">News</a> </p>
                    <p> <a href="#convert">Currency Converter</a></p>
                    <p> <a href="#gold">Gold Prices History</a> </p>
                </div>
            </div>
            <div className="egy__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="white"
                        size={27}
                        onClick={() => setMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="white"
                        size={27}
                        onClick={() => setMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className="egy__navbar-menu-container scale-up-center">
                        <p> <a href="#home">Home</a> </p>
                        <p> <a href="#news">News</a> </p>
                        <p> <a href="#convert">Currency Converter</a></p>
                        <p> <a href="#gold">Gold Prices History</a> </p>
\                    </div>
                )}

            </div>
        </div>
    );
};

export default Navbar;
