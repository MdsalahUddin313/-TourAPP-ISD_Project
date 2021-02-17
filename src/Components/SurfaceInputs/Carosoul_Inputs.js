import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Carosoul_Inputs = () => {

   

    const carosoul_style={height:"600px"};
 
    return (
        <>
<Carousel className="container-fluid w-100">
  <Carousel.Item interval={1000} style={carosoul_style}>
    <img 
      className="d-block w-100"
      src="https://imgcld.yatra.com/ytimages/image/upload/t_ann_seo_banner_tab/v1530015312/AdvNation/ANN_TRP156/adventure-trips-in-india_1440486703_aNbqdJ.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500} style={carosoul_style}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YWR2ZW50dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={carosoul_style}>
    <img
      className="d-block w-100"
      src="https://static.toiimg.com/photo/66461473/paragliding.jpg?width=748&resize=4"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </>
    );
};

export default Carosoul_Inputs;