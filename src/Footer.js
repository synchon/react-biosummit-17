import React from 'react';

const Footer = props => {
    return (
        <footer className="footer animated fadeIn">
            <div className="container">
                <div className="content has-text-centered">
                    <p>© {props.year} {props.author}</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;