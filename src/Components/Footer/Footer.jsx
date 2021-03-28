import React from 'react';
import footer from '../Assets/footer_design_edited.jpg';
import {Image,Button} from 'react-bootstrap';
import './footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer = () => {
    return (
        <div>
            <Image className="w-100" src={footer} alt="images"></Image>
            <div className="footerPart ">
                <div className="row">
                    <div className="col-md-4 col-xl-4 col-sm-12">
                    <a className="text-white text-left" href="#"> About us </a><br></br>
                          <a className="text-white text-left" href="#"> Our Blogs </a><br></br>
                          <a className="text-white text-left" href="#"> Support us </a><br></br>
                          <a className="text-white text-left" href="#"> Contact Us </a><br></br>
                          <a className="text-white text-left" href="#"> Home </a><br></br>
                          <a className="text-white text-left" href="#"> Package info </a><br></br>

                    </div>
                    <div className="col-md-4 text-left col-xl-4 col-sm-12">
                          
                          <input className="form-control w-50"></input>
                           <Button>Search</Button>
                     </div>
                     <div className="col-md-4 text-left col-xl-4 col-sm-12">
                          <p className="text-white text-left">Follow Us from</p>
                          <a className="text-white text-left" href="#"> <FacebookIcon></FacebookIcon> </a>
                          <a className="text-white text-left" href="#"> <InstagramIcon></InstagramIcon> </a>
                          <a className="text-white text-left" href="#"> <WhatsAppIcon></WhatsAppIcon> </a>
                          <a className="text-white text-left" href="#"> <TwitterIcon></TwitterIcon> </a>
                          <a className="text-white text-left" href="#"> <YouTubeIcon></YouTubeIcon></a>
                          
                          <p className="text-white text-left mt-2"> &#169; All Copyrights are reserved By</p>
                          <p className="text-white text-left mt-2"> Md Salah Uddin, Joy, SM Yakub.</p>
                          

                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Footer;
