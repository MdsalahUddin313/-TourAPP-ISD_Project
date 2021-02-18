import React from 'react';
import {FormControl,Col,Button,Row,Image,Container,Form,Table,Card} from 'react-bootstrap';
import Ratingsbar from '../../SurfaceInputs/Ratingsbar';
import Collapse from '@material-ui/core/Collapse';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import '../../Styles/aboutus.css';

const Singlebus = () => { const text_align={textAlign:"left"}
const text_ratings={fontsize:"2px",padding:"3px",backgroundColor:"yellow" ,borderRadius:"5px",borderWidth:"4px",borderColor:"red",textAlign:"left"}
const prices={fontSize:"20px",paddingTop:"5px",paddingBottom:"5px"}
const cardStyles={padding:"15px",borderColor:"red",borderWidth:"2px",borderRadius:"5px",}
const imagesizes={height:"400px",width:"100%"}
const description_style={textAlign:"left",marginTop:"35px"}
const room_available={color:"red"}
const image_style={width:"60%",marginTop:"55px"}



return (
    <div>
        <h1>Single Hotel system</h1>
        <Card style={cardStyles}>
        <Container>
      <Row>
<Col><Image style={imagesizes} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/></Col>
<Col style={text_align} xs={6}>
    <h4><a href="#">One-Stop Residence & Hotel Opens in new window</a><><Ratingsbar></Ratingsbar>4.5</></h4>
     <p className="text-muted">1,121 reviews</p>
     <p className="text-muted"><strong>Superior twin room</strong></p>
     <p className="text-muted">2 beds, 1 room</p>
     <p ><strong><span style={room_available}>1 room available,in this hotel</span></strong> </p>
     <p style={prices}><AccountBalanceWalletIcon></AccountBalanceWalletIcon> Price:$12,000</p>
     <p className="btn btn-outline-primary"style={prices}>Book Now -))</p>
</Col>

</Row>
<p style={description_style}> Most popular facilities<br/>
<AcUnitIcon></AcUnitIcon>2 swimming pools (Temporarily closed)<br/>
<AcUnitIcon></AcUnitIcon>Spa and wellness centre (Temporarily closed)<br/>
<AcUnitIcon></AcUnitIcon>Non-smoking rooms<br/>
<AcUnitIcon></AcUnitIcon>Room service<br/>
<AcUnitIcon></AcUnitIcon>superb fitness centre (Temporarily closed)<br/>
<AcUnitIcon></AcUnitIcon>Airport shuttle<br/>
<AcUnitIcon></AcUnitIcon>Restaurant (Temporarily closed)<br/>
<AcUnitIcon></AcUnitIcon>Bar (Temporarily closed)<br/>
<AcUnitIcon></AcUnitIcon>Fabulous breakfast</p>


<p style={description_style}><strong>Description:</strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

<h1 className="our_test_header">BUS seat Chart</h1>
<Image style={image_style} src="https://templatelab.com/wp-content/uploads/2020/11/Bus-Seating-Chart-Template-TemplateLab.com_.jpg"></Image>

</Container>
        </Card>
    </div>
);
};

export default Singlebus;