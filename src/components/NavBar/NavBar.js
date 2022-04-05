import React from "react";
import {Link} from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to={"/books"}>Library</Link>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/books"}>Books</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/categories"}>Categories</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/authors"}>Authors</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/countries"}>Countries</Link>
                    </li>
                </ul>
                <span className={"navbar-text"}>Role: <span
                    className={"badge bg-warning text-dark"}>Librarian</span></span>
            </div>
        </nav>
    );
}

export default NavBar;