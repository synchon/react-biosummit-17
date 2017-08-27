import React from 'react';
import Logo from './biosummit-logo.svg';
import Tiles from './Tiles';
import Biosummit from './biosummit.jpg'

const Home = props => {
    return (
            <section className="hero animated fadeIn" style={style.hero}>
                <div className="column is-centered has-text-centered" style={style.tile}>
                  <div className="column is-narrow">
                      <div className="title">School of Bio Sciences and Technology</div>
                      <div className="subtitle">presents</div>
                  </div>   
                  <img src={Logo} style={style.logo} alt="Biosummit '17" className="animated pulse"/>
                  <div className="column is-narrow">
                      <div className="button is-dark is-bold animated pulse">27 - 28 October, VIT University</div>
                  </div>
                  <div className="box container" style={style.text}>
                      <div><Tiles data={['1000+ participants','28 industry associates','4-panel discussions','2 workshops']} /></div>
                  </div>
                  <div className="box container">
                      <p className='subtitle' style={style.text}>The traditional roles of academia and industry in education, training, knowledge generation, innovation, and production for the marketplace are even more important in the 21st century as they were previously. Strengthening these roles through effective partnerships is worthy and an important goal. At the same time, there is a need to address the Global Grand Challenges and also, there is a need for academia and industry that works along with other sectors of society, to develop solutions for the biological problems. After the five successful editions of Biosummit, the School of Bio Sciences and Technology of VIT University is glad to host the upcoming 2017 edition of the national level Industry-Academia Interaction. We are proud to say that since the year of its commencement, this event has been witnessing an overwhelming response with the participation of more than 2000 delegates across the country.</p>
                  </div>
                </div>   
            </section>
    )
};

let style = {
    logo: {
        padding: 20,
        height: '50vh',
    },
    text: {
        textAlign: 'justify'
    },
    hero: {
        background: 'linear-gradient(135deg, darkturquoise, limegreen)'
    },
    tile: {
        fontSize: 25
    }
};

export default Home;
