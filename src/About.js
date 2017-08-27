import React from 'react';
import University from './vit_university.jpg';
import SMV from './smv.jpg';

const About = props => {
    return (
        <section className="has-text-centered animated fadeIn">
            <section className="section">
                <div className="content">
                    <p className="title">VIT University</p>
                    <p style={style.text}>VIT University was founded in 1984 as Vellore Engineering College by the Chancellor  Dr. G. Viswanathan. From its humble beginning, the institution has grown exponentially to that of having more than 33,000 students. Students from all the states of India and from more than 50 countries are studying at VIT. University status was conferred in 2001 by MHRD Govt. of India in recognition of its excellence in academics, research and extracurricular initiatives. Currently, VIT  has 4 campuses – in Vellore, Chennai, Amaravati (AP) and Bhopal (MP). The National Institutional Ranking Framework (NIRF) of the MHRD, Government of India, has identified VIT as the best Private Engineering Institution in India in the year 2016 and in 201. VIT has gone for accreditation by NAAC [India], IET [UK], and ABET [USA] and follows world class academic process. VIT is the first and only University in India to get 4 star rating from QS, the world universities ranking organization. The Industry consortium FICCI, has declared VIT as the “University of the Year 2016”, in India. VIT has also been ranked in the top 201-250 in QS BRICS Ranking in 2016 and in the top  251-300 in Times Higher Education (THE), Asia Ranking.</p>
                    <figure className="image">
                        <img src={University} alt="VIT University"/>
                    </figure>
                </div>
            </section>

            <section className="section">
                <div className="content">
                    <p className="title">School of Bio Sciences and Technology</p>
                    <p style={style.text}>School of Bio Sciences and Technology (SBST) offer programs in various disciplines of Modern Biology such as B.Tech., & M.Tech. Biotechnology, M.Sc. in Applied Microbiology, Biotechnology, Biomedical Genetics, M.Sc. Biotechnology (5years Intg.), M.Tech. by Research and Ph.D. The School houses excellent infrastructure and well trained faculty members which makes it to be one among the largest populations of trained biologists (104 nos.), in our country. Most of them have pursued Post-Doctoral training from laboratories in developed countries. The competencies of the faculty in research are endorsed by the quality of research papers (Scopus indexed publications) and obtaining research projects (60 projects are currently underway in the School, funded by National & International agencies). These components makes SBST listed amongst the top schools of Modern Biology in India.</p>
                    <figure className="image">
                        <img src={SMV} alt="SMV"/>
                    </figure>
                </div>
            </section>
        </section>
    )
};

const style = {
    text: {
        textAlign: 'justify'
    }
};

export default About;