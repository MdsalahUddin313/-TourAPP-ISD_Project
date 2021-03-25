import React from 'react';
import {FormControl,Col,Button,Row,Image,Container,Form,Table,Card} from 'react-bootstrap';
import Ratingsbar from '../../SurfaceInputs/Ratingsbar';
import Collapse from '@material-ui/core/Collapse';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import '../../Styles/aboutus.css';
import StickyFooter from '../../Footer/StickyFooter';
import Header from '../../Header/Header';
import Header_two from '../../Header/Header_two';
import {useParams} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {Hindex} from '../../BookingProcess/HotelsSelection/HIndex';
const SingleHotelPage = (props) => {

  const [hotelsValues, setHotelsValues] = useState([]);
  let {id} =useParams();
  
  //const {CartHandalling}=props.CartHandalling;
  
  const uri="http://127.0.0.1:8000/api/apis/hotels/"+id+"/";
  
  useEffect(()=>{fetch(uri,{
      "method": "GET",
      headers:{
          'Content-Type':'application/json',
          'Authorization':'Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2'
      }

  }).then(res=>res.json())
  .then(res=>setHotelsValues(res))
  .catch(err=>console.log(err))

},[])

  function handleLink(){
    //Link to="/checkout"
    window.open('/checkout');
  
    
 };
    const text_align={textAlign:"left"}
    const text_ratings={fontsize:"2px",padding:"3px",backgroundColor:"yellow" ,borderRadius:"5px",borderWidth:"4px",borderColor:"red",textAlign:"left"}
    const prices={fontSize:"20px",paddingTop:"5px",paddingBottom:"5px"}
    const cardStyles={padding:"15px",borderColor:"red",borderWidth:"2px",borderRadius:"5px",}
    const imagesizes={height:"400px",width:"100%"}
    const description_style={textAlign:"left",marginTop:"35px"}
    const room_available={color:"red"}
    const ancor_style={textDecoration:"none",color:"#e68a1c"}

    


    return (
        <div>
            
            <h1>{id}Details Page</h1>
            <Card style={cardStyles}>
            <Container>
          <Row>
    <Col xs={9}><Image style={imagesizes} src={hotelsValues.hotel_images} rounded fluid/></Col>
    <Col style={text_align} xs={3}>
        <h4><a href="#">{hotelsValues.hotel_name}</a><><Ratingsbar></Ratingsbar>4.5</></h4>
         <p className="text-muted">1,121 reviews</p>
         <p className="text-muted"><strong>Superior twin room</strong></p>
         <p className="text-muted">2 beds, 1 room</p>
         <p ><strong><span className="text-info" style={room_available}>1 room available,in this hotel</span></strong> </p>
         <p style={prices}><AccountBalanceWalletIcon></AccountBalanceWalletIcon> Price:Tk {hotelsValues.hotels_roomprice}</p>
         <p className="btn btn-outline-danger text-white"><a style={ancor_style} href="#">Book Now -))</a></p>
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


<p style={description_style}><strong>Description:</strong>{hotelsValues.hotel_details}</p>

<h1 className="our_test_header">Hotel rooms Costs List</h1>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>One Bed</th>
      <th>Twin Bed</th>
      <th>Two Room</th>
      <th>Five Room</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>For One Night</td>
      <td>400tk</td>
      <td>700tk</td>
      <td>1200tk</td>
      <td>6500tk</td>
    </tr>
    <tr>
      <td>For two Night</td>
      <td>600tk</td>
      <td>1300tk</td>
      <td>2200tk</td>
      <td>1150tk</td>
    </tr>
    <tr>
      <td>For Four Night</td>
      <td>2400tk</td>
      <td>5200tk</td>
      <td>9000tk</td>
      <td>40000tk</td>
    </tr>
  </tbody>
</Table>


</Container>

<div >
        <iframe className="mapFrame" src={hotelsValues.hotels_location} width="400" height="500" allowFullscreen="true" loading="lazy"></iframe>
        </div>
            </Card>

            <StickyFooter></StickyFooter>
        </div>
    );
};

export default SingleHotelPage;