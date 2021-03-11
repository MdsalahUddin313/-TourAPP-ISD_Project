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
import {Link} from 'react-router-dom';


import Pagination from '../../SurfaceInputs/Pagination';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

const cityImages={"firstName":"John", "lastName":"Doe"} ;
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


const HIndex = () => {
    const [currency, setCurrency] = React.useState('EUR');
    const classes = useStyles();
    const handleChange = (event) => {
        setCurrency(event.target.value);
      };

    return (
        <>
        <h1 className="pb-4">Find your Hotels</h1>
        <div className="container ">
      <div className="row hotelbody">
        <div className="col-md-6">
            <Card className="p-2">
        <Form>
           <Form.Row>
              <Col xs={3}>
           <Form.Control placeholder="City" />
              </Col>
              <Col>
              <InputGroup className="mb-2">
               <InputGroup.Prepend>
                  <InputGroup.Text><DateRangeIcon/>From</InputGroup.Text>
               </InputGroup.Prepend>
                 <FormControl id="inlineFormInputGroup" type="date" placeholder="Username" />
               </InputGroup>
              </Col>
              <Col>
              <InputGroup className="mb-2">
               <InputGroup.Prepend>
                  <InputGroup.Text><DateRangeIcon/>To</InputGroup.Text>
               </InputGroup.Prepend>
                 <FormControl id="inlineFormInputGroup" type="date" placeholder="Username" />
               </InputGroup>
              </Col>

           
        </Form.Row>

        <Form.Row>
        <Col>
        <InputGroup className="mb-2">
               <InputGroup.Prepend>
                  <InputGroup.Text><PersonOutlineIcon/></InputGroup.Text>
               </InputGroup.Prepend>
             
              <Form.Control
                    as="select"
                    className="my-0 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                             >
                        <option value="0">Choose..</option>
                        <option value="1">Person One</option>
                        <option value="2">Person Two</option>
                        <option value="3">Person Three</option>

             </Form.Control> 
            </InputGroup>

  </Col>
  <Col>
  
  <InputGroup className="mb-2">
               <Form.Label className="mt-0">
                   $Price Range
                   </Form.Label>                
               <Form>
                 <Form.Group className="mt-0 ml-2" controlId="formBasicRange">
                 
                    <Form.Control type="range" />
                  </Form.Group>
                  </Form>
            </InputGroup>
  
  </Col>

  <Col>
        <InputGroup className="mb-2">
               <InputGroup.Prepend>
                  <InputGroup.Text><FreeBreakfastRoundedIcon/></InputGroup.Text>
               </InputGroup.Prepend>
             
              <Form.Control
                    as="select"
                    className="my-0 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                             >
                        <option value="0">Facilities</option>
                        <option value="1">Wifi</option>
                        <option value="2">Pool</option>
                        <option value="3">Bar</option>

             </Form.Control> 
            </InputGroup>

  </Col>
        </Form.Row>
</Form>
</Card>
<hr/>

    
<Card className={classes.card}>
      <CardActionArea>
         <div className="row">
          <div sm={3}>
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://cf.bstatic.com/images/hotel/max1024x768/224/22443294.jpg"
          title="Contemplative Reptile"
        />
          </div>
          </div>
      </CardActionArea>
      <CardContent>
      <CardActions>
        <Typography component="h4" variant="h6">Hotels Radission</Typography>    
      <hr/> 
      </CardActions>
      <Typography component="p" className="text-muted text-left"><strong>Room</strong>:2 bed room are available</Typography>
      <Typography component="p" className="text-muted text-left"><strong>Ratings:</strong>4.5<FavoriteIcon color="secondary" justifyContent="flex-end"/></Typography>      
<CardActions>
      <Button size="small" className="btn-danger">
          Price:$25
        </Button>
        <Link to="/singlehotels">
        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
        </CardActions>
      </CardContent>
    </Card>

    
<Card className={classes.card}>
      <CardActionArea>
         <div className="row">
          <div sm={3}>
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://momblogsociety.com/wp-content/uploads/2019/03/hotels.jpg"
          title="Contemplative Reptile"
          
        />
          </div>
          </div>
       
        


      </CardActionArea>
      <CardContent>
      <CardActions>
      
      
        <Typography component="h4" variant="h6">Hotels Radission</Typography>
      
      <hr/> 
      </CardActions>
      <Typography component="p" className="text-muted text-left"><strong>Room</strong>:2 bed room are available</Typography>
      <Typography component="p" className="text-muted text-left"><strong>Ratings:</strong>4.5<FavoriteIcon color="secondary" justifyContent="flex-end"/></Typography>
        
<CardActions>
      <Button size="small" className="btn-danger">
          Price:$25
        </Button>
        <Link to="/singlehotels">
        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
        </CardActions>
      </CardContent>
    </Card>


    
<Card className={classes.card}>
      <CardActionArea>
         <div className="row">
          <div sm={3}>
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://mvgholidays.com/wp-content/uploads/2019/07/even-hotels-eugene-5405616297-4x3.jpg"
          title="Contemplative Reptile"
          
        />
          </div>
          </div>
       
        


      </CardActionArea>
      <CardContent>
      <CardActions>
      
      
        <Typography component="h4" variant="h6">Hotels Radission</Typography>
      
      <hr/> 
      </CardActions>
      <Typography component="p" className="text-muted text-left"><strong>Room</strong>:2 bed room are available</Typography>
      <Typography component="p" className="text-muted text-left"><strong>Ratings:</strong>4.5<FavoriteIcon color="secondary" justifyContent="flex-end"/></Typography>
        
<CardActions>
      <Button size="small" className="btn-danger">
          Price:$25
        </Button>
        <Link to="/singlehotels">
        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
        </CardActions>
      </CardContent>
    </Card>


    
<Card className={classes.card}>
      <CardActionArea>
         <div className="row">
          <div sm={3}>
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4"
          title="Contemplative Reptile"
          
        />
          </div>
          </div>
       
        


      </CardActionArea>
      <CardContent>
      <CardActions>
      
      
        <Typography component="h4" variant="h6">Hotels Radission</Typography>
      
      <hr/> 
      </CardActions>
      <Typography component="p" className="text-muted text-left"><strong>Room</strong>:2 bed room are available</Typography>
      <Typography component="p" className="text-muted text-left"><strong>Ratings:</strong>4.5<FavoriteIcon color="secondary" justifyContent="flex-end"/></Typography>
        
<CardActions>
      <Button size="small" className="btn-danger">
          Price:$25
        </Button>
        <Link to="/singlehotels">
        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
        </CardActions>
      </CardContent>
    </Card>

    
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
      
      
        <Typography component="h4" variant="h6">Hotels Radission</Typography>
      
      <hr/> 
      </CardActions>
      <Typography component="p" className="text-muted text-left"><strong>Room</strong>:2 bed room are available</Typography>
      <Typography component="p" className="text-muted text-left"><strong>Ratings:</strong>4.5<FavoriteIcon color="secondary" justifyContent="flex-end"/></Typography>
        
<CardActions>
      <Button size="small" className="btn-danger">
          Price:$25
        </Button>
        <Link to="/singlehotels">
        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
        </CardActions>
      </CardContent>
    </Card >
        </div>
        <div className="col-md-5 mapArea sticky-top" fixed="top">
        <div >
        <iframe className="mapFrame" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d120477.63171785981!2d90.30473969550115!3d23.790765644698794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdhaka%20hotels!5e1!3m2!1sbn!2sbd!4v1615398073485!5m2!1sbn!2sbd" width="600" height="700" allowfullscreen="true" loading="lazy"></iframe>
        </div>
        </div>
        </div>

          
        <Pagination className="mt-4 mb-5 p-5"></Pagination>
       
       </div>
        
        </>
    );
};

export default HIndex;