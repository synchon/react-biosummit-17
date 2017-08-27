import React from 'react';
import Tiles from './Tiles';

const Industry = props => {
    return (
       	<section className="section animated fadeIn has-text-centered">
       		<Tiles data={['Agilent Technologies, Bengaluru','Anthem Biosciences Pvt. Ltd., Bengaluru','Biocon, Bengaluru']} />
            <Tiles data={['Bioklone Technologies, Chennai','Bhat Biotech Pvt. Ltd., Bengaluru','GE Healthcare, Bengaluru']} />
		    <Tiles data={['Genewin Pvt. Ltd., Bengaluru','Genotypic Technologies [P] Ltd., Bengaluru','Hi Media, Mumbai']} />
		    <Tiles data={['Hindustan Unilever Ltd., Bengaluru','HLL Biotech, Chennai','Jodas Pharmaceutical, Hyderabad']} />
		    <Tiles data={['Kan Biosys, Pune','Labmate Asia, Bengaluru','LifeCell International Pvt. Ltd., Chennai']} />
		    <Tiles data={['Malladi Drugs and Pharmaceuticals, Ranipet','Microtherapeutics, Chennai','Mylan Biotech, Hosur']} />
		    <Tiles data={['Novo Nordisk India Pvt. Ltd., Bengaluru','Novozymes, Bengaluru','Omniactive Health Technologies, Mumbai']} />
		    <Tiles data={['Orchid Pharmaceuticals, Chennai','Organica Biotech. Pvt. Ltd., Mumbai','Pfizer Ltd., Chennai']} />
		    <Tiles data={['Pharmaceutical Product Development, Bengaluru','Pharma Quality Europe (PQE)','Salem Microbes Pvt. Ltd., Salem']} />
		    <Tiles data={['Unique Biotech, Hyderabad']} />
		</section>
    )
};

export default Industry;
