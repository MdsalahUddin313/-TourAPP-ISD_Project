import React from 'react';
import Header_two from '../../Header/Header_two';
import Header from '../../Header/Header';
import Singlebus from './Singlebus';
import StickyFooter from '../../Footer/StickyFooter';


const TransportIndex = () => {
    return (
        <div>
            <Header></Header>
            <Header_two></Header_two>
            <Singlebus></Singlebus>
            <StickyFooter></StickyFooter>
        </div>
    );
};

export default TransportIndex;