import React from 'react';
import StickyFooter from '../../Footer/StickyFooter';
import Header from '../../Header/Header';
import HotelList from './HotelList';
import Header_two from '../../Header/Header_two';
import {FormControl,Col,Button,Row,Image,Container,Form,Card} from 'react-bootstrap';
import SearchFilters from '../SearchFilters';
import Filter from '../Filter';
import PaginationSize from '../../SurfaceInputs/Pagination';



const HotelIndex = () => {
    const element=['','','','','','']
    const pagination_style={marginTop:"5535px",textAalign:"center"}
    const list_style={marginTop:"15px"}
    return (
        <div>
            <Header></Header>
            <Header_two></Header_two>

           
            <Container>
  <Row>
    <Col  style={list_style} xs={8}>
         {element.map((a)=>{return <HotelList></HotelList>})} 
        </Col>
    <Col xs={{ order: 'first' }}><Filter></Filter> <SearchFilters></SearchFilters></Col>
  </Row>
</Container>
            <div className="justify-centre" styles={pagination_style}>
                <Container>
            <PaginationSize styles={pagination_style}></PaginationSize>
            </Container>
            </div>
            <StickyFooter></StickyFooter>
        </div>
    );
};

export default HotelIndex;