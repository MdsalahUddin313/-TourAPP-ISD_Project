import React from 'react';
import {FormControl,Form,Card} from 'react-bootstrap'
const Filter = (props) => {
 
    const filter_styles={padding:"15px",borderRadius:"10px"}

    return (
        <div>
            <Card style={filter_styles}>
                <h1>Filtered By</h1>
            <Form.Group>
                <p>Filter one</p>
            <Form.Control size="sm" as="select">
               <option>Filter By money</option>
               <option>Option 1</option>
               <option>Option 2</option>
               <option>Option 3</option>
               <option>Option 4</option>
               <option>Option 5</option>
            </Form.Control>
            <p>Filter one</p>
              <Form.Control size="sm" as="select">
               <option>Filter By popular Hotels </option>
               <option>Option 1</option>
               <option>Option 2</option>
               <option>Option 3</option>
               <option>Option 4</option>
               <option>Option 5</option>
              </Form.Control>
              <p>Filter one</p>
              <Form.Control size="sm" as="select">
               <option>Filter By Star Ranking</option>
               <option>Option 1</option>
               <option>Option 2</option>
               <option>Option 3</option>
               <option>Option 4</option>
               <option>Option 5</option>
              </Form.Control>
              <p>Filter one</p>
              <Form.Control size="sm" as="select">
               <option>Filter By Facilities</option>
               <option>Option 1</option>
               <option>Option 2</option>
               <option>Option 3</option>
               <option>Option 4</option>
               <option>Option 5</option>
              </Form.Control>
            </Form.Group>
            </Card>
        </div>
    );
};

export default Filter;