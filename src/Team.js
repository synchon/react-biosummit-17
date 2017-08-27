import React from 'react';
import Tiles from './Tiles';

const SpecialTile = props => {
	return (
		<div className="tile is-ancestor has-text-centered">
		    <div className="tile is-6 is-parent is-vertical">
		        <div className="tile is-child">{props.data[0]}</div>
		        <div className="subtitle"><div className="tile is-child">{props.data[1]}</div></div>
		    </div>
		    <br/>
		    <div className="tile is-6 is-parent is-vertical">
		        <div className="tile is-child">{props.data[2]}</div>
		        <div className="subtitle"><div className="tile is-child">{props.data[3]}</div></div>
		    </div>
		</div>
	)
};

const Team = props => {
        return (
            <section className="animated fadeIn has-text-centered" style={style.section}>
                <section className="section">
                    <div className="box container">
                        <div className="title"><Tiles data={['Chief Patron']} /></div>
                        <Tiles data={['Dr. G. Viswanathan']} />
                        <div className="subtitle"><Tiles data={['Chancellor']} /></div>
                    </div>
                </section>
                <section className="section">
                    <div className="box container">
                        <div className="title"><Tiles data={['Patron']} /></div>
                        <Tiles data={['Shri. G. V. Selvam']} />
                        <div className="subtitle"><Tiles data={['Vice President']} /></div>
                    </div>
                </section>
                <section className="section">
                    <div className="box container">
                        <div className="title"><Tiles data={['Co-Patrons']} /></div>
                        <SpecialTile data={['Dr. Anand A. Samuel','Vice Chancellor','Dr. S. Narayanan','Pro Vice Chancellor']} />
                    </div>
                </section>
                <section className="section">
                    <div className="box container">
                        <div className="title"><Tiles data={['Chairperson']} /></div>
                        <Tiles data={['Dr. K.M. Gothandam']} />
                        <div className="subtitle"><Tiles data={['Dean, SBST']} /></div>
                    </div>
                </section>
                <section className="section">
                    <div className="box container">
                        <div className="title"><Tiles data={['Convener']} /></div>
                        <Tiles data={['Dr. V. Mohanasrinivasan']} />
                    </div>
                </section>
                <section className="section">
                    <div className="box container">
                        <div className="title"><Tiles data={['Co-Conveners']} /></div>
                        <Tiles data={['Dr. K. Ramanathan','Dr. S. Vino','Dr. W. Jabez Osborne','Dr. K. Suthindhiran']} />
                    </div>
                </section>
                <section className="section">
                    <div className="box container">
                        <div className="title"><Tiles data={['Organizers']} /></div>
                        <Tiles data={['Dr. V. Samuel Rajkumar','Dr. S. Karthikeyan','Dr. Arabi Mohammed Saleh']} />
                        <Tiles data={['Dr. V. Pragasam','Dr. M. Anbalagan','Dr. P. Ravanan']} />
                        <Tiles data={['Dr. C. Rajasekaran','Dr. T.B. Sridharan','Dr. Padma Thiagarajan']} />
                        <Tiles data={['Dr. C. Subathradevi','Dr. Jayanthi Abraham','Dr. V. Shanthi']} />
                        <Tiles data={['Dr. N. Ramesh','Dr. J. Febin Prabhu Dass','Dr. M.A. Jayasri']} />
                        <Tiles data={['Dr. E.P. Sabina','Dr. S. Asha Devi','Dr. S. Venkat Kumar']} />
                        <Tiles data={['Dr. M. Ramesh Pathy','Dr. V. Devi Rajeswari','Dr. R. Vidya']} />
                        <Tiles data={['Dr. S. Sajitha Lulu','Dr. A. Mohanapriya','']} />
                    </div>
                </section>
            </section>
        )
};

const style = {
    section: {
        background: 'linear-gradient(135deg, darkturquoise, limegreen)'
    }
};

export default Team;
