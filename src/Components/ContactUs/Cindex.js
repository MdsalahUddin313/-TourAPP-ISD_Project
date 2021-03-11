import React from 'react';
import Footer from '../Blogs/Footer';
import StickyFooter from '../Footer/StickyFooter';
import Header from '../Header/Header';
import LeftBar from '../SurfaceInputs/LeftBar';
import Contactus from './Contactus';

const Cindex = () => {

    const style = {
        width: "100%",
        height: "300px"
        }
    return (
        <div>
            <Contactus></Contactus>
            <iframe style={style} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12658.18977413693!2d90.39316432529061!3d23.84675151048533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6845e8f79b1%3A0x40968f0ec95484ba!2z4Ka54Kef4Kaw4KakIOCmtuCmvuCmueCmnOCmvuCmsuCmvuCmsiDgpo_gpq_gprzgpr7gprDgpqrgp4vgprDgp43gpp8g4Kac4Ka-4Kau4KeHIOCmruCmvuCmuOCmnOCmv-Cmpg!5e1!3m2!1sbn!2sbd!4v1613554519537!5m2!1sbn!2sbd" ></iframe>
            <StickyFooter></StickyFooter>
        </div>
    );
};

export default Cindex;