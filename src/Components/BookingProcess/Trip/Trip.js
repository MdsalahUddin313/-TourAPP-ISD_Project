import React from 'react';
import { Button,Form,Image } from 'react-bootstrap';
import 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import 'tstyle';
import StickyFooter from '../../Footer/StickyFooter';
import {Link} from 'react-router-dom';
import './Tstyle.css'; 
import PlanHistory from './PlanHistory';


 const style = {
       
        
        }

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;
  

  

const Trip = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


    return (
        <div className="ml-5">
            <h1>Trip</h1>
            <Form className="col-md-6 text-center container">
              <Form.Group controlId="formBasicEmail">
                   <Form.Label><i className="fal fa-search"></i></Form.Label>
                   
                   <Form.Control type="text" placeholder="Search for Hotel,Locations and manymore" />
                   <Form.Text className="text-muted">We'll find your desired places.</Form.Text>
              </Form.Group>
            
            </Form>

<div className="Search-images container mt-5">
 
  
    <div className="d-flex justify-content-end container" style={style}>    
        <IconButton
                alignItems="flex-end" 
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                >
             <MoreVertIcon />
             </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
              style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
              
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
     
    </div>
    <h1 className="d-flex justify-content-start success text-color" >Saint martin</h1>
    <p className="text-left text-color">সেন্ট মার্টিন দ্বীপ বাংলাদেশের সর্ব দক্ষিণে বঙ্গোপসাগরের উত্তর-পূর্বাংশে অবস্থিত একটি ছোট প্রবাল দ্বীপ (মাত্র ৮ বর্গকিলোমিটার)। এটি কক্সবাজার জেলার টেকনাফ হতে প্রায় ৯ কিলোমিটার দক্ষিণে ও মায়ানমার-এর উপকূল হতে ৮ কিলোমিটার পশ্চিমে নাফ নদীর মোহনায় অবস্থিত। প্রচুর নারিকেল পাওয়া যায় বলে স্থানীয়ভাবে একে নারিকেল জিঞ্জিরাও বলা হয়ে থাকে। বাংলাদেশের সমুদ্রপ্রেমীদের কাছে এটি ব্যাপক পরিচিত একটি নাম। বিখ্যাত লেখক, কথাসাহিত্যিক হুমায়ূন আহমেদের দারুচিনি দ্বীপ নামের পূর্ণদৈর্ঘ্য ছায়াছবি দ্বারা এই দ্বীপটির পরিচিতি আরো বেড়ে যায়।</p>
</div>
    
      <div class="trip-plan container m-auto mt-3">
      <h6>কোথায় যাবেন?</h6>
      <h6>Google-এর থেকে সামান্য সাহায্য নিয়ে আপনার পরের ট্রিপ প্ল্যান করুন</h6>
      <Link to="/tourplan"><Button className="btn-success btn-lg mt-4">ট্রিপ প্ল্যান করুন</Button></Link>
      </div>
  

      <h3 className="text-left container mt-5">Your visited places history.</h3>
      <div className="container mt-5">
       <PlanHistory></PlanHistory>
       </div>

       <div className="mt-4">

       </div>
        
        <StickyFooter></StickyFooter>
        </div>

    );
};

export default Trip;