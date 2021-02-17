import React from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Sponsors = () => {
    return (
        <div>
            <Container>
            <Row>
               <Col><Image src="https://tbsnews.net/sites/default/files/styles/big_3/public/images/2019/07/11/bkash_logo_0.jpg?itok=JWmFcYd0" fluid /></Col>
               <Col><Image src="https://thefinancialexpress.com.bd/uploads/1585114992.jpg" fluid /></Col>
                <Col><Image src="https://futurestartup.com/wp-content/uploads/2016/09/DBBL-Mobile-Banking-Becomes-Rocket.jpg" fluid /></Col>
                <Col><Image src="https://cdn.vox-cdn.com/thumbor/ZbZ9itaU0chbIghH56Y66hcJbts=/0x0:1563x1041/1200x800/filters:focal(665x359:915x609)/cdn.vox-cdn.com/uploads/chorus_image/image/57442483/TripAdvisor.0.jpg" fluid /></Col>
                <Col><Image src="https://lh3.googleusercontent.com/_5U2gcaOuJfwrhYMYpU5rRX5wnCn5ijLWg-plATF9bAnQjbb3cVDXJnyhBkKdPVShc4" fluid /></Col>

            </Row>
            </Container>
        </div>
    );
};

export default Sponsors;