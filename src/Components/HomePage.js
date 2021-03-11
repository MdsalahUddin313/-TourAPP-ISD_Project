import React from 'react';

import Header from './Header/Header';
import Carousel from 'react-bootstrap/Carousel';
import Carosoul_Inputs from './SurfaceInputs/Carosoul_Inputs';
import RecipeReviewCard from './SurfaceInputs/RecipeReviewCard';
import {Container,Row,Col,CardGroup,Card} from 'react-bootstrap';
import ImageGridList from './SurfaceInputs/ImageGridList';
import StickyFooter from './Footer/StickyFooter';
import './Styles/homepage.css';
import LeftBar from './SurfaceInputs/LeftBar';
import StickyHeader from './SurfaceInputs/StickyHeader';
import Gridimages from './SurfaceInputs/Gridimages';

import Card_two from './Property_holders/Card_two';
import DestinationForm from './SurfaceInputs/DestinationForm';
//import Header_two from './Header/Header_two';
import Header_three from './Header/Header_three';


const HomePage = () => {
    const elements = ['','',''];
    const card_style ={};
    

   
    return (
        <div>
            {/* <Header></Header>
            <Header_two></Header_two> */}
            <Header_three/>
            <Carosoul_Inputs></Carosoul_Inputs>

      
           <DestinationForm></DestinationForm>


            <h1 className="htypes">Top Restrurents</h1>
        <div class="top_places">
            <Container>
               <Row>
         {elements.map((a)=>{return (
         <>  
              <Col>
           <RecipeReviewCard/>
             </Col>
           </>
           );       
           })}
           </Row>
            </Container>
            </div>


            <h1 className="htypes">Top Cities</h1>
            
            <>

       <Container>
          <Row>
          <Col xs={6} md={3}><Card_two></Card_two></Col>
          <Col xs={6} md={3}><Card_two></Card_two></Col>
          <Col xs={6} md={3}><Card_two></Card_two></Col>
          <Col xs={6} md={3}><Card_two></Card_two></Col>

          </Row>
        </Container>
        </>


  {/*Gallery */}
   
        <h1 className="htypes">Gallery</h1>


           <Gridimages></Gridimages>

  {/*Dream Places */}
           <h1 className="htypes">Dream Places</h1>


           <Container>
               <Row>
         {elements.map((a)=>{return (
         <>  
              <Col>
           <RecipeReviewCard/>
             </Col>
           </>
           );       
           })}
           </Row>
            </Container>

      {/*Footer */}
            <StickyFooter></StickyFooter>
           
        </div>
    );
};

export default HomePage;

/*
{elements.map((a)=>{return <RecipeReviewCard></RecipeReviewCard>})}
*/