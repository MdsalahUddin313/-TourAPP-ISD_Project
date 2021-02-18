
import {FormControl,Col,Button ,Form,Card} from 'react-bootstrap';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TodayIcon from '@material-ui/icons/Today';
import '../Styles/aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";


const SearchFilters = () => {

    const [startDate, setStartDate] = useState(new Date());

    const cardStyle={padding:"25px",borderRadius:"25px"}
    const formStyle={marginTop:"25px"}















    
    return (
        <div>
            
            <Card style={cardStyle}>
            <h1 className="our_test_header">Search Filters</h1>
            <h1>----------------------</h1>

            <Form style={formStyle}>

      <Form.Row>
    <Form.Group as={Col} controlId="formGridForm">
      <Form.Label>From<TodayIcon></TodayIcon></Form.Label>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

    </Form.Group>

    <Form.Group as={Col} controlId="formGridForm">
      <Form.Label>To<TodayIcon></TodayIcon></Form.Label>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Adults</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose Adults...</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>

      </Form.Control>
    </Form.Group>



    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Children</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose Child...</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>

      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Hotel Room</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose Rooms...</option>
        <option>1 rooms</option>
        <option>2 rooms</option>
        <option>3 rooms</option>
        <option>4 rooms</option>
        <option>5 rooms</option>
        <option>6 rooms</option>
        <option>7 rooms</option>
        <option>8 rooms</option>
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
</Card>
        </div>
    );
};

export default SearchFilters;