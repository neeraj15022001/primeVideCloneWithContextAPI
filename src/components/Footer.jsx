import React from 'react';
import "./css/Footer.css";
import Logo from "../assets/logo.png"

function Footer() {
    return (
        <div className="d-flex flex-column justify-content-around my-5">
            <img src={Logo} alt="footer_logo" className="footer__image m-auto" />
            <ul className="footer__links d-flex align-items-center flex-row justify-content-center list-unstyled">
                <li><a href="#terms">Terms and Privacy Notice</a></li>
                <li><a href="#feedback">Send Us Feedback</a></li>
                <li><a href="#help">Help</a></li>
                <li>© 1996-2021, AmazonFake.com, Inc. or its affiliates</li>
            </ul>
        </div>
    );
}

export default Footer
