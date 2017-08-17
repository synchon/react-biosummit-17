import React, { Component } from 'react';
import Section from './Section.js';
import Footer from './Footer.js';
import 'bulma/css/bulma.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css'

const NavBar = props => {
    return (
        <nav className="nav">
            <div className="nav-left">
                <a href="https://www.facebook.com/vitbiosummit/" className="nav-item"><span className="icon"><i className="fa fa-facebook-official"></i></span></a>
                <a href="https://www.instagram.com/vitbiosummit/" className="nav-item"><span className="icon"><i className="fa fa-instagram"></i></span></a>
            </div>
            <div className="nav-center">
                <div className="nav-item"><a href="http://info.vit.ac.in/conference/biosummit/apply.asp" className="button is-primary is-outlined"><span>Register</span></a></div>
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
            </div>
        </nav> 
    )
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
    };


    render() {
        return (
            <div>
                <NavBar burgerToggle={this.burgerToggle} navigateTo={this.navigateTo}/>
                <Section currentTab={this.state.currentTab}/>
                <Footer author={'Synchon Mandal'} year={2017}/>
            </div>
        );
      }
}


export default App;
