import React from 'react';
import Image from 'react-bootstrap/Image';
import {Container,Row,Col,Card} from 'react-bootstrap';
import '../Styles/aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RedditIcon from '@material-ui/icons/Reddit';
import CardsItems from './OurProjects';
const Aboutus = () => {

    return (
        <div>
         <div className="image_header">
             <h1 className="header_one">You only live once, but if you do it right, once is enough.</h1>
             <p className="header_two">---Mae West.</p>
         </div>
        <div>

            <div>
                <h1 className="our_test_header" >Our Story</h1>
                <p>________________</p>
            </div>

            <>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, <br/>remaining essentially unchanged. It was popularised in the 1960s <br/>with the release of Letraset sheets containing Lorem Ipsum passages,<br/> and more recently with desktop publishing software like <br/>Aldus PageMaker including versions of Lorem Ipsum</p>
            </>




            <div>
                <h1 className="our_test_header" >Our Teams</h1>
                <p>________________</p>
            </div>
       
        </div>
        </div>
    );
};

export default Aboutus;