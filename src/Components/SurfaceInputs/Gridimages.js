import React from 'react';
import {Image,Row,Col,Container} from 'react-bootstrap';

const Gridimages = () => {
    const margin={marginTop:"15px"}
    const gallery_images={backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg)"}
    return (
        <div>
            <Container>
            <Row>
    <Col xs={6} md={3}>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid>
        
    </Image>
    </Col>
    <Col xs={6} md={3}>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/>
      
    </Col>
    <Col xs={6} md={3}>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/>
          </Col>
    <Col xs={6} md={3}>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/>
          </Col>
  </Row>



  <Row>
    <Col xs={12} md={6}>
    <Image style={margin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/>
    </Col>
    <Col xs={12} md={6}>
    <Image style={margin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/>
      
    </Col>
  </Row>

  <Row>
    <Col xs={6} md={2}>
    <Image style={margin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/>
    <Image style={margin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/>
    </Col>
    <Col xs={6} md={4}>
    <Image style={margin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/>
    </Col>
    <Col xs={12} md={4}>
    <Image style={margin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/>
    </Col>
    <Col xs={6} md={2}>
    <Image style={margin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/>
    <Image style={margin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" rounded fluid/>
    </Col>

  </Row>
  </Container>
        </div>
    );
};

export default Gridimages;