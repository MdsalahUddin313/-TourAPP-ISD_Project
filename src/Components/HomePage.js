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
const HomePage = () => {
    const elements = ['','',''];
    const card_style ={};
    

   
    return (
        <div>
            <LeftBar></LeftBar>
            <Carosoul_Inputs></Carosoul_Inputs>

      



            <h1 className="htypes">Top places</h1>
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



        
        <h1 className="htypes">Gallery</h1>


           <ImageGridList></ImageGridList>


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

      
            <StickyFooter></StickyFooter>
           
        </div>
    );
};

export default HomePage;

/*
{elements.map((a)=>{return <RecipeReviewCard></RecipeReviewCard>})}
*/