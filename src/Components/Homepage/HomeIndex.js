import React from 'react';
import Videopart from './Videopart';
import './headstyle.css';
import Video from './Video';
import WhyChooseUs from './WhyChooseUs';
import Navbarpart from './Navbarpart';
import Transports from './Transports';
import Package from './Package';
import Footer from '../Footer/Footer';

const HomeIndex = () => {
    return (
        <div>
           <Video></Video>
           <Transports></Transports>
           <WhyChooseUs></WhyChooseUs>
           <Package></Package>

        </div>
    );
};

export default HomeIndex;