import React from 'react';
import Footer from '../Blogs/Footer';
import StickyFooter from '../Footer/StickyFooter';
import Header from '../Header/Header';
import LeftBar from '../SurfaceInputs/LeftBar';
import Contactus from './Contactus';

const Cindex = () => {
    return (
        <div>
            <Header></Header>
            <Contactus></Contactus>
            <StickyFooter></StickyFooter>
        </div>
    );
};

export default Cindex;