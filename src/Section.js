import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Events from './Events.js';
import Team from './Team.js';
import Industry from './Industry.js'

const Section = props => {
    const tab = props.currentTab
    if (tab === 'Home') {
        return <Home />
    } else if (tab === 'About') {
        return <About />
    } else if (tab === 'Events') {
        return <Events />
    } else if (tab === 'Our Team') {
        return <Team />
    } else {
        return <Industry />
    }
};

export default Section;