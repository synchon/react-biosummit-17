import React from 'react';

const Events = props => {
        return (
            <section className="section has-text-centered animated fadeIn" style={style.section}>
                <section className="section">
                    <div className="box container">
                        <p className="title">Panel Discussion</p>
                        <ul className="has-text-left">
                            <li>Skill set requirements and challenges for a Life Science graduate.</li><br/>
                            <li>Startups and funding models for aspiring Bio-entrepreneurs.</li><br/>
                            <li>How to make yourself more employable? - From Alumni perspective.</li><br/>
                            <li>Higher education opportunities in India and abroad.</li>
                        </ul>
                    </div>
                </section>

                <section className="section">
                    <div className="box container">
                        <p className="title">Instrumentation Tour</p>
                        <p style={style.text}>Complementary Instrumentation tour for external participants will be arranged. Students will be exposed to various labs at VIT University, where we have high end instruments like Scanning Electron Microscope (SEM), Transmission Electron Micrscope (TEM), Atomic Force Microscope (AFM), GCMS, HPLC, Lyophilizer, NMR, Nanoparticle Analyser, XRD, FTIR, etc.</p>
                    </div>
                </section>

                <section className="section">
                    <div className="box container">
                        <p className="title">Workshops</p>
                        <ul>
                            <li>Pharmaceutical Quality & GMPs</li>
                            <li>Animal Cell Culture</li>
                        </ul>
                    </div>
                </section>

                <section className="section">
                    <div className="box container">
                        <p className="title">Technical Events</p>
                        <ul>
                            <li>Startup BIO</li>
                            <li>BIO App Development </li>
                            <li>Hack-a-thon</li>
                            <li>Forensics</li>
                        </ul>
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

export default Events;
