import React, { useState } from "react";
import EDYODA from '../assets/images/LOGO.png';

let NavBar = () => {

    let [isCollapsed, setIsCollapsed] = useState(true);

    let toggleNavBar = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container">
                    <img src={EDYODA} className="img-fluid me-5" alt="" />
                    <button className="navbar-toggler text-dark bg-dark" onClick={toggleNavBar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isCollapsed ? '' : ' show'}`}>
                        <ul className="navbar-nav">
                            <li className="nav-item me-5">
                                <a href="" className="nav-link text-dark">courses <i className="fa fa-caret-down ms-3"></i> </a>
                            </li>
                            <li className="nav-item ">
                                <a href="" className="nav-link text-dark">programs <i className="fa fa-caret-down ms-3"></i></a>
                            </li>
                        </ul>
                        <ul className="navbar-nav  ms-auto">
                            <li className="nav-item">
                                <a href="" className="nav-link text-dark"> <i className="fa fa-search me-5"></i> </a>
                            </li>
                            <li className="nav-item ">
                                <a href="" className="nav-link text-dark me-5">Log in </a>
                            </li>
                            <li className="nav-item ">
                                <a href="" className="nav-link">
                                    <button className="badge bg-primary rounded-pill">JOIN NOW</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default NavBar;