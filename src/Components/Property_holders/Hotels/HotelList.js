import React from 'react';
import {FormControl,Col,Button,Row,Image,Container,Form,Card} from 'react-bootstrap';
import Ratingsbar from '../../SurfaceInputs/Ratingsbar';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const HotelList = (props) => {
    const text_align={textAlign:"left"}
    const text_ratings={fontsize:"2px",padding:"3px",backgroundColor:"yellow" ,borderRadius:"5px",borderWidth:"4px",borderColor:"red",textAlign:"left"}
    const prices={fontSize:"20px",paddingTop:"5px",paddingBottom:"5px"}
    const cardStyles={padding:"15px",borderColor:"red",borderWidth:"2px",borderRadius:"5px",}
    const imagesizes={height:"200px",width:"100%"}
    const room_available={color:"red"}
    const ancor_style={textDecoration:"none",color:"white"}

    
    return (
        <div>
            <Card style={cardStyles}>
            <Container>
          <Row>
    <Col><Image style={imagesizes} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/></Col>
    <Col style={text_align} xs={6}>
        <h4><a href="/singlehotels">One-Stop Residence & Hotel Opens in new window</a><><Ratingsbar></Ratingsbar>4.5</></h4>
         <p className="text-muted">1,121 reviews</p>
         <p className="text-muted"><strong>Superior twin room</strong></p>
         <p className="text-muted">2 beds, 1 room</p>
         <p ><strong><span style={room_available}>1 room available,in this hotel</span></strong> </p>

    </Col>
    <Col ><p className="btn btn-outline-danger" style={prices}>Price: $12,000</p>
    <p className="btn btn-primary"style={prices}><a href="/checkout" style={ancor_style}>Book Now -))</a></p></Col>
  </Row>
</Container>
            </Card>
        </div>
    );
};

export default HotelList;