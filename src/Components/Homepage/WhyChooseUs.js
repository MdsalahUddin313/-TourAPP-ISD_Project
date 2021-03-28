import React from 'react';
import {Row,Col,Button,Card,Image} from 'react-bootstrap';
import image_one from '../Assets/01.JPG';
import './headstyle.css';
const WhyChooseUs = () => {

    const headerStyle={
        fontFamily: "'Delius', cursive",
    }
    const header_one={

    }
    return (
        <div className="mb-5" >
                     


         <div className="row mt-5 client_part">
            <div className="col-md-6  ">
                <div className="">
                <Image className="w-100" src={image_one} alt="asd"></Image>
                </div>
            </div>            
            <div className="col-md-6 col-xl-6 p-4 ml-0 mt-4  col-sm-12 client_text_part">
               <h1 style={headerStyle} className="text-left p-2">Client Satisfaction is our Main Priority</h1>
               <h6 className="text-left p-2"><span className="text-info text-left"><strong>15m</strong> </span>Satisfied Clients</h6>
               <h6 className="text-left p-2"><span className="text-info  text-left"><strong>20k</strong> </span>Amazing Tours</h6>
               <h6 className="text-left p-2"><span className="text-info  text-left"><strong>150</strong></span> Award winning</h6>
             <a className="btn btn-outline-info text-left p-2">Read More</a>
            </div>
        </div> 





                     <h1 className="p-3 mt-5 pt-5 mb-4" style={header_one}>Why Choose Us?</h1>
            
             <div className="container">
              <div className="row">

           <div className="col-md-4 col-xl-4 col-sm-12 p-2">
               <Card className="shadow avatar_design">
               </Card>
               <Card className="shadow rounded">
                   <h4 style={headerStyle} className="pt-3">Easy Booking</h4>
                   <hr></hr>
                   <p className="text-left p-3 text_area">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> 
                </Card>
           </div>
           <div className="col-md-4 col-xl-4 col-sm-12 p-2">
           <Card className="shadow avatar_design">
               </Card>
               <Card className="shadow rounded">
                   <h4 style={headerStyle} className="pt-3">Special Offers</h4>
                   <hr></hr>
                   <p className="text-left p-3 text_area2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> 
                </Card>
           </div>
           <div className="col-md-4 col-xl-4 col-sm-12 p-2">
           <Card className="shadow avatar_design">
               </Card>
               <Card className="shadow rounded">
                   <h4 style={headerStyle} className="pt-3">All time support</h4>
                   <hr></hr>
                   <p className="text-left p-3 text_area3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> 
                </Card>
           </div>
        </div>      
             
               
   </div>   


{/*Customer reviews*/}
 
          <div className="row container">
             <div className="col">

             </div>
          </div>

            
        </div>
    );
};

export default WhyChooseUs;