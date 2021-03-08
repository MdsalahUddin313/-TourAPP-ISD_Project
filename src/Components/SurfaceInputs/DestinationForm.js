import React from 'react';
import {Form,Col,Row,Container,Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function handleLink(){
  window.open("/tourplan");
}

const DestinationForm = () => {
  const ancor_style={textDecoration:"none",color:"#e68a1c"}
  const margin_top={marginTop:"45px",marginBottom:"45px"}
  const card_style={borderRadius:"35px"}
  const form_style={paddingLeft:"125px",paddingTop:"15px",paddingbottom:"15px",textalign:"center",marginbottom:"112px"}
    return (
        <div style={margin_top}>
            <Container>
            <p><strong>Choose Your Desired Destination.</strong></p>
            <Card style={card_style}>
            <Form style={form_style}>
  <Row>
    <Col>
  <Form.Control
    as="select"
    className="my-1 mr-sm-2"
    id="inlineFormCustomSelectPref"
    custom
  >
    <option value="0">From...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Control>
    </Col>
    
    
    <Col>
  <Form.Control
    as="select"
    className="my-1 mr-sm-2"
    id="inlineFormCustomSelectPref"
    custom
  >
    <option value="0">To...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Control>
    </Col>

    <Col>
    <Button type="submit" className="my-2">
      <Link to="/tourplan" style={ancor_style}>Submit </Link>
    </Button>
    </Col>
  </Row>
</Form>
</Card>
</Container>
        </div>
    );
};

export default DestinationForm;