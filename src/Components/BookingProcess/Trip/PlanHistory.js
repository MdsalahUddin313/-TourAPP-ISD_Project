import React from 'react';
import { Button,Form,Image ,Card,CardDeck} from 'react-bootstrap';

const PlanHistory = () => {
    return (
        <div>
            <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://dailyasianage.com/library/1582060099_9.jpg" />
    <Card.Body>
      <Card.Title class="text-left p-2">Saintmartin</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last Visited 4 months ago</small>
    </Card.Footer>
  </Card>



  <Card>
    <Card.Img variant="top" src="https://everestholidays.com.bd/wp-content/uploads/2019/10/Saint-martin.jpg" />
    <Card.Body>
      <Card.Title class="text-left p-2">Sajek </Card.Title>
    </Card.Body>

    <Card.Footer>
      <small className="text-muted">Last visited 1year ago</small>
    </Card.Footer>
  </Card>


  <Card>
    <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/1c/11/c7/d7/caption.jpg" />
    <Card.Body>
      <Card.Title class="text-left p-2">Khulna </Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last visited 5 months ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
        </div>
    );
};

export default PlanHistory;