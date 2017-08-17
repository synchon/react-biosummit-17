import React from 'react';
import University from './vit_university.jpg';
import SMV from './smv.jpg';

const About = props => {
    return (
        <div className="has-text-centered animated fadeIn">
            <section className="section">
                <div className="content">
                    <p className="title">VIT University</p>
                    <p>
                        Founded in 1984 as Vellore Engineering College, the institute was declared as a University in recognition of its academic excellence by the Ministry of Human Resources Development, Government of India in 2001. The University has since grown by leaps and bounds – establishing excellent infrastructure replete with state-of-art laboratories, digital library, smart class rooms, hostels, gyms, swimming pools, auditoria, in-door and out-door stadiums spread over an impeccably clean and green 350 acre campus – on way to fulfill the vision of the founder and chancellor Dr. G. Viswanathan to make it truly world class. VIT today comprises eleven constituent schools and interdisciplinary research centres offering undergraduate, post graduate and research programmes in various disciplines. VIT has organized many National and International conferences in the recent past utilizing its awesome facilities. VIT University has been ranked as No. 1 Private Engineering Institution in India by the Ministry of Human Resource Development, Government of India. VIT is the first educational institution in India to get ISO9002 certification by the DNV of The Netherlands. The University was recently re-accredited for the third cycle by NAAC (UGC). VIT has signed Memorandum of Understanding with many institutions within India and abroad including Australia, Canada, France, Germany, UK and USA. This helps in exchange of faculty and students, joint academic programmes involving courses as well as research and improvement of laboratory and library facilities. The University offers 21 Undergraduate, 34 Postgraduate, 4 integrated programmes and 4 Research programmes. The various programmes in VIT are offered through eleven Schools and Centers.
                    </p>
                        <img src={University} alt="VIT University"/>
                </div>
            </section>

            <section className="section">
                <div className="content">
                    <p className="title">School of Bio Sciences and Technology</p>
                    <p>
                        School of Bio Sciences and Technology (SBST) offer programs in various disciplines of Modern Biology such as B.Tech., & M.Tech. Biotechnology, M.Sc. in Applied Microbiology, Biotechnology, Biomedical Genetics, M.Sc. Biotechnology (5years Intg.), M.Tech. by Research and Ph.D. The School houses excellent infrastructure and well trained faculty members which makes it to be one among the largest populations of trained biologists (104 nos.), in our country. Most of them have pursued Post-Doctoral training from laboratories in developed countries. The competencies of the faculty in research are endorsed by the quality of research papers (Scopus indexed publications) and obtaining research projects (60 projects are currently underway in the School, funded by National & International agencies). These components makes SBST listed amongst the top schools of Modern Biology in India.
                    </p>
                    <img src={SMV} alt="SMV"/>
                </div>
            </section>
        </div>
    )
};

export default About;