import React from 'react';

const Events = props => {
        return (
            <div className="has-text-centered animated fadeIn">
                <section className="section">
                    <div className="box container">
                        <p className="title">Panel Discussion</p>
                            <ul>
                                <li>Skill set requirements and challenges for a Life Science graduate.</li>
                                <li>Startups and funding models for aspiring Bio-entrepreneurs.</li>
                                <li>How to make yourself more employable? - From Alumni perspective.</li>
                                <li>Higher education opportunities in India and abroad.</li>
                            </ul>
                    </div>
                </section>

                <section className="section">
                    <div className="box container">
                        <p className="title">Instrumentation Tour</p>
                        <p>Complementary Instrumentation tour for external participants will be arranged. Students will be exposed to various labs at VIT University, where we have high end instruments like Scanning Electron Microscope (SEM), Transmission Electron Micrscope (TEM), Atomic Force Microscope (AFM), GCMS, HPLC, Lyophilizer, NMR, Nanoparticle Analyser, XRD, FTIR, etc.</p>
                    </div>
                </section>

                <section className="section">
                    <div className="box container">
                        <p className="title">Workshops</p>
                        <ul>
                            <li>QC/ QA/ GXPs</li>
                            <li>Bioinstrumentation </li>
                            <li>Cell Culture</li>
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
            </div>
        )
};

export default Events;