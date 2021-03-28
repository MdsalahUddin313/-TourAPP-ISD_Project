import React from 'react';
import Header from '../Header/Header';
import Aboutus from './Aboutus';
import CardsItems from './OurProjects';
import CardTeams from './CardTeams';
import OurProjects from './OurProjects';
import '../Styles/aboutus.css';
import Image from 'react-bootstrap/Image';
import Sponsors from './Sponsors'
import StickyFooter from '../Footer/StickyFooter'
import Header_two from '../Header/Header_two';


const AboutIndex = () => {
    return (
        <div>
               
               <Aboutus></Aboutus>
               <CardTeams></CardTeams>

<div>
               <h1 className="our_test_header">Our Projects</h1>
               <p>______________</p>
               </div>
               <OurProjects></OurProjects>

<div>
               <h1 className="our_test_header">Our Sponsors</h1>
               <p>______________</p>
               </div>
               <Sponsors></Sponsors>
        </div>
    );
};

export default AboutIndex;