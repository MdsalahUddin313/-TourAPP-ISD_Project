import React from 'react';
import { Button,Form,Image,Col,InputGroup } from 'react-bootstrap';
import './Pstyle.css';
import PinDropIcon from '@material-ui/icons/PinDrop';

const Pindex = () => {
    return (
        <div>
            <div className="forms">
            <h1 className="mb-5">Book AirTicket</h1>

            <Form className="col-md-6 text-left container formArea">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>From</Form.Label>
      <InputGroup className="mb-2">
      <InputGroup.Prepend>
          <InputGroup.Text><PinDropIcon/></InputGroup.Text>
        </InputGroup.Prepend>
      <Form.Control type="text" placeholder="Enter Departure City Name" />
      </InputGroup>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>To</Form.Label>
      <InputGroup className="mb-2">
      <InputGroup.Prepend>
          <InputGroup.Text><PinDropIcon/></InputGroup.Text>
        </InputGroup.Prepend>
      <Form.Control type="From" placeholder="Enter Arrival City Name" />
      </InputGroup>
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Departure time</Form.Label>
      <Form.Control  type="date"/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Arrival Time</Form.Label>
      <Form.Control type="date" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Class</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Economy</option>
        <option>Premium</option>
        <option>First Class</option>
        <option>Premium Economy</option>
      </Form.Control>
    </Form.Group>

   
  </Form.Row>

  <Form.Row>
   
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Number Of Adult Persons</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>8</option>
        <option>10</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Number Of Child</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>8</option>
        <option>10</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Trip Type</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>1 way</option>
        <option>Round Trip</option>
        <option>Multiple City</option>
        
      </Form.Control>
    </Form.Group>

   
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
        </div>
    );
};

export default Pindex;