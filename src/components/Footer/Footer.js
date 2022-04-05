import React from "react";

const Footer = (props) => {
    return (
        <figure className="container mt-5 text-end">
            <blockquote className="blockquote">
                <h5 className={"h5"}>A simple web app with CRUD functionalities, navigation and pagination.</h5>
                <h6 className={"h6 text-muted"}>Technologies used: <span className={"text-info"}>React</span> for
                    frontend and <span className={"text-success"}>Spring Boot</span> for backend.</h6>
            </blockquote>
            <figcaption className="blockquote-footer">
                by: Emilijan Koteski
            </figcaption>
        </figure>
    );
}

export default Footer;