import React from 'react';

const Footer = props => {
    return (
        <footer className="footer animated fadeIn">
            <div className="container">
                <div className="content has-text-centered">
                    <p><strong>Registration Queries:</strong></p>
                    <p>Dr. S. Vino: <a href="tel:+919944807642">+91 9944807642</a></p>
                    <p>Ms. Shruthi Suthakaran: <a href="tel:+919884074153">+91 9884074153</a></p>
                    <p><a href="mailto:vitbiosummit%40gmail%2ecom?subject=Registration Query">vitbiosummit@gmail.com</a></p>
                    <br/>
                    <p>© {props.year} {props.author}</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
