import React from 'react';
import 'react-bootstrap';
import HouseIcon from '@material-ui/icons/House';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import TrainIcon from '@material-ui/icons/Train';
import './headstyle.css';
import {Link} from 'react-router-dom';
const Transports = () => {
    return (
        <>
        <div className="container-fluid">
            <h5 className="mt-5 pb-3 text-info">Start Your Trip From Here</h5>

            <div className="row">
                  <div className="col-md-8 m-auto d-flex justify-content-center">
                    <div className="border-info shadow p-3 m-3 circle iconDesign">
                           <Link to="/hotelsBooking">
                           <HouseIcon color="primary"></HouseIcon>
                                <br></br>
                             <p>Hotel</p>
                             </Link>
                    </div>
                    <div className="border-info shadow p-3 m-3 circle iconDesign">
                           <Link to="/planeBooking">
                                 <FlightTakeoffIcon color="primary"></FlightTakeoffIcon>
                                <br></br>
                             <p>Flight</p>
                             </Link>
                    </div>
                    <div className="border-info shadow p-3 m-3 circle iconDesign">
                             <Link to="/busbook">
                                <DirectionsBusIcon color="primary"></DirectionsBusIcon>
                                <br></br>
                             <p>Bus</p>
                             </Link>
                    </div>
                    <div className="border-info shadow p-3 m-3 circle iconDesign">
                             <Link to="/trainbook">
                                <TrainIcon color="primary"></TrainIcon>
                                <br></br>
                             <p>Train</p>
                             </Link>
                    </div>
                    
                  </div>
                  
                  
            </div>

        </div>
        </>
    );
};

export default Transports;