import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Steps from '../SurfaceInputs/Steps';
import {FormControl,Col,Button,Row,Image,Container,Form,Table,Card} from 'react-bootstrap';
import Header from '../Header/Header';
import Header_two from '../Header/Header_two';
import StickyFooter from '../Footer/StickyFooter';

const StepsIndex = () => {

   
    
    
    const header_style = {fontFamily: 'Sacramento',padding:"35px",marginTop:"35px",fontSize:"72px"};
    const para_style={marginBottom:'115px',padding:'5px'}
    const colum_style={textAlign:"centre",margin:"auto"}
    const param_style={marginBottom:'75px',marginBottom:'115px',padding:'5px',fontFamily: 'Sacramento',fontSize:"35px"}
    

    return (
        <div>
           
            <h1 style={header_style}>Plan your Tourism in easy and comfortable way.</h1>
            <h6 style={para_style}>We are your partner who tries to help you in your journey.Plan your tour easily and save your time and money</h6>
            
           
            <Row>
                <Container>
            <Col style={colum_style} className="col-md-7 ">
            <Steps></Steps>
            </Col>
            </Container>
            </Row>

            <h5 style={param_style}>We hope for your happy journey</h5>

            <StickyFooter></StickyFooter>
       
       
        </div>
    );
};

export default StepsIndex;