import React from 'react';
import Logo from './logo.svg';

const Home = props => {
    return (
            <section className="hero is-primary is-bold animated fadeIn">
                <div className="column is-centered has-text-centered">
                    <img src={Logo} style={style.logo} alt="Biosummit '17"/>
                    <div className="column is-narrow">
                        <div className="button is-dark is-bold">27 - 28 October, VIT University</div>
                    </div>
                    <div className="box container">
                        <p>The traditional roles of academia and industry in education, training, knowledge generation, innovation and production for the marketplace are even more important in the 21st century as they were previously. Strengthening these roles through effective partnerships is worthy and important goal. At the same time, there is a need to address the Global Grand Challenges and there is a need for academia and industry, working with other sectors of society, to develop solutions for the biological problems. After the five successful editions of Biosummit, a national level industry-academia interaction, School of Bio Sciences and Technology of VIT University, glad to host the upcoming 2017 edition. Since the year of commencement, this event has been witnessing an overwhelming response with the participation of more than 2000 delegates all over India.</p>
                    </div>
                </div>
            </section>
        )
};

let style = {
    logo: {
        padding: 10,
        height: '70vh'
    }
}

export default Home;
