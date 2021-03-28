import React from 'react';
import './headstyle.css';
import {Card,Button } from 'react-bootstrap';
const Package = () => {
    return (
        <div className="packages_part">

            <h5 className="text-info m-5 p-3"> We Also Offers Some Packages For Our Clients</h5>
            <div className="row">
                <div className="col-xs-12 m-2 col-md-8 col-xl-8 m-auto d-flex justify-content-center">
                    
                    <Card className="packages_cards_one p-4 pb-5 m-3">
                        <div>
                            <h1>Basic Package</h1>
                            <hr></hr>
                            <p>10 hours Support</p>
                            <p>15% transport Cost off</p>
                            <p>Our Best guide line Nevigation</p>
                            <p>2 hours Photography.</p>
                            <p>A gift voucher</p>
                            <Button className="">Buy</Button>

                        </div>
                    </Card>

                    <Card className="packages_cards_two p-4 pb-5 m-3">
                        <div>
                            <h1>Premiere Package</h1>
                            <hr></hr>
                            <p>50 hours Support</p>
                            <p>25% Restrurant Cost off</p>
                            <p>Our Best guide line Nevigation</p>
                            <p>10 hours Photography.</p>
                            <p>Add as our premium member</p>
                            <Button className="">Buy</Button>

                        </div>
                    </Card>

                    


                </div>

            </div>
        </div>
    );
};

export default Package;