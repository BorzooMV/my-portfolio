import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    return(
        <footer className="Footer">
            <div className="footer-name">
                <h2>Borzoo Moazami</h2>
            </div>
            <div className="footer-social">
                <a href="https://www.instagram.com/borzoomoazami/"><i className="fab fa-instagram"></i></a>
                <a href="https://github.com/BorzooMV"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/borzoo-moazami?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZZw1Pk%2BgRauIglYTfz%2FYzg%3D%3D"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="footer-copy">
                <p> Designed and developed by <em>Borzoo Moazami</em> </p>
                <span>&copy;</span><span> {today.getFullYear()}</span>
            </div>
        </footer>
    );
}

export default Footer;