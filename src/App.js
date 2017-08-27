import React, { Component } from 'react';
import Section from './Section.js';
import Footer from './Footer.js';
import 'bulma/css/bulma.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css'
import Logo from './vit-logo.png'

const NavBar = props => {
    return (
        <nav className="nav">
            <div className="nav-left">
                <img src={Logo} alt="VIT logo" style={style.logo}/>
                <a href="https://www.facebook.com/vitbiosummit/" target="_blank" rel="noopener noreferrer" className="nav-item"><span className="icon" alt="facebook" style={style.facebook}><i className="fa fa-facebook-official"></i></span></a>
                <a href="https://www.instagram.com/vitbiosummit/" target="_blank" rel="noopener noreferrer" className="nav-item"><span className="icon" alt="instagram" style={style.instagram}><i className="fa fa-instagram"></i></span></a>
            </div>
            <div className="nav-center">
                <div className="nav-item"><a href="http://info.vit.ac.in/conference/biosummit/apply.asp" target="_blank" rel="noopener noreferrer" className="button is-primary is-outlined"><span>Register</span></a></div>
            </div>
            <span className="nav-toggle" onClick={props.burgerToggle}>
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div className="nav-right nav-menu">
                <div className="nav-item" onClick={props.navigateTo}><a>Home</a></div>
                <div className="nav-item" onClick={props.navigateTo}><a>About</a></div>
                <div className="nav-item" onClick={props.navigateTo}><a>Events</a></div>
                <div className="nav-item" onClick={props.navigateTo}><a>Our Team</a></div>
                <div className="nav-item" onClick={props.navigateTo}><a>Industry Associates</a></div>
                <div className="nav-item" onClick={props.burgerToggle}><a href="https://vitbiosummit.pixieset.com/vitbiosummit2016/" target="_blank" rel="noopener noreferrer">Gallery</a></div>
            </div>
        </nav>
    )
};

let style = {
    facebook: {
        color: '#5074c5',
    },
    instagram: {
        color: '#f8004e'
    },
    logo: {
        maxWidth: 128,
        padding: 5
    }
};

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTab: 'Home'
        }
        this.burgerToggle = this.burgerToggle.bind(this);
        this.navigateTo = this.navigateTo.bind(this);
    }

    burgerToggle() {
        document.querySelector('.nav-toggle').classList.toggle('is-active');
        document.querySelector('.nav-menu').classList.toggle('is-active');
    };

    navigateTo(e) {
        this.setState({currentTab: e.target.innerHTML})
        this.burgerToggle()
    };


    render() {
        return (
            <div>
                <NavBar burgerToggle={this.burgerToggle} navigateTo={this.navigateTo}/>
                <Section currentTab={this.state.currentTab}/>
                <Footer author={'Synchon Mandal'} year={2017}/>
            </div>
        )
    };
};


export default App;
