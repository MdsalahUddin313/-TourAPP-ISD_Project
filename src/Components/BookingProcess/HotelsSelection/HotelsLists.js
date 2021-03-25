import React from 'react';
import '../WhatToDo/Wstyle.css';
import { makeStyles } from '@material-ui/core/styles';

import { Button,Form,Image,Col,Row,InputGroup,FormControl } from 'react-bootstrap';
import 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PinDropIcon from '@material-ui/icons/PinDrop';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//import 'tstyle';
import StickyFooter from '../../Footer/StickyFooter';
//import CardOptions from './CardOptions';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import WifiRoundedIcon from '@material-ui/icons/WifiRounded';
import Typography from '@material-ui/core/Typography';
import FreeBreakfastRoundedIcon from '@material-ui/icons/FreeBreakfastRounded';
import TextField from '@material-ui/core/TextField';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DateRangeIcon from '@material-ui/icons/DateRange';
import BarChartIcon from '@material-ui/icons/BarChart';
import PoolRoundedIcon from '@material-ui/icons/PoolRounded';
import LocalBarRoundedIcon from '@material-ui/icons/LocalBarRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
//import {Link} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import {useState,useEffect } from 'react';
import 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";
import {createContext} from 'react';
import SingleHotelPage from '../../Property_holders/Hotels/SingleHotelPage';
import Checkout from '../Checkout/Checkout';

//const cityImages={"firstName":"John", "lastName":"Doe"} ;
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height:250
  },
  media: {
    height: 140,
  },
  card:{
      maxWidth: 500,
      marginTop:20,
  }

});
const SendCartData = createContext();

const HotelsLists = () => {

  const [Cart, setCart] = useState([]);
  let {url} =useRouteMatch();
  let {ids} = useParams ();
  const classes = useStyles();
  const [hotelsData, setHotelsData] = useState([]);
 const HotelsURL="http://127.0.0.1:8000/api/apis/hotels/";
 
 
 const onclickHandaller=(body)=>{
    console.log(body.id)
 }

 useEffect(() => {
    fetch(HotelsURL,{
        'method':'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Token d03ef30f3aa3b550c60d69d1134a7b38d10526e2` 

        }
    }).then(res =>res.json())
    .then(res=>setHotelsData(res))    
    .catch(err=>console.log(err))
}, [])

const CartHandalling=(bodyData)=>{
  let cartData= [...Cart,bodyData];
  setCart(cartData);
  console.log(bodyData);
  console.log(cartData.length);
  
}

    return (
        <div>
               {/*console.log(hotelsData)
               
               <SendCartData.Provider value={[Cart,setCart]}>
                 <Checkout></Checkout>
              </SendCartData.Provider>

               
               */}
  


  <h1>Cart<span className="text-danger">{Cart.length}</span></h1>
  {Cart.map((cart)=>{return <div className="shadow block rounded border-success-1 p-5" key={cart.id}>
    <p>{cart.hotel_name}</p>
    <Link className="btn btn-success text-white" to={`${url}/${cart.id}`}>{cart.hotels_roomprice} TK</Link>
    <a className="btn btn-success" href="#" >Book</a>
    
    </div>})}

  <hr></hr>

  {hotelsData.map((a)=>{return <div>
        <Card className={classes.card}>
      <CardActionArea>
       <div className="row">
       <div sm={3}>
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://static.toiimg.com/photo/66274130/Taj.jpg?width=748&resize=4"
          title="Contemplative Reptile"
          
          />
      </div>
      </div>
       </CardActionArea>
       <CardContent>
         <CardActions>  
                <Typography component="h4" variant="h6">{a.hotel_name}</Typography>
      <hr/> 
        </CardActions>
               <Typography component="p" className="text-muted text-left"><strong>Room</strong>:2 bed room are available</Typography>
               <Typography component="p" className="text-muted text-left"><strong>Location</strong>:{a.hotel_address}</Typography>              
               <Typography component="p" className="text-muted text-left"><strong>Ratings:</strong>4.5<FavoriteIcon color="secondary" justifyContent="flex-end"/></Typography>        
               <Typography component="p" className="text-left"><strong>Price:</strong><span className="text-dark">{a.hotels_roomprice} Tk</span></Typography>        
         
          <CardActions>
            <Link  onClick={()=>CartHandalling(a)}>
               <Button size="small" className="btn-danger">
                  <AddIcon></AddIcon>Add To WhishList
               </Button>
            </Link>
           
           <Link onClick={()=>onclickHandaller(a)} to={`${url}/${a.id}`}>
              <Button size="small" color="primary">
                  Learn More
              </Button>
           </Link>
          </CardActions>
        </CardContent>
    </Card >
    </div>})}

        </div>
    );
};

export default HotelsLists;
export {SendCartData};
