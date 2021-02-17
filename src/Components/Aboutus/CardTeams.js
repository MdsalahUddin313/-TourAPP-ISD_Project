import React from 'react';
import {Container,Row,Col,Card,CardColumns,CardGroup,CardDeck} from 'react-bootstrap';
import '../Styles/aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RedditIcon from '@material-ui/icons/Reddit';

const CardTeams = () => {
    return (
        <div>
            <Container>
            <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/91.jpg" roundedCircle  />
    <Card.Body>
      <Card.Title>John Doe</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
              <FacebookIcon className="icon-spaces"></FacebookIcon>
               <GitHubIcon className="icon-spaces"></GitHubIcon>
               <LinkedInIcon className="icon-spaces"></LinkedInIcon>
               <RedditIcon className="icon-spaces"></RedditIcon>
      </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/34.jpg" roundedCircle  />
    <Card.Body>
      <Card.Title>Arfin roy</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> 
      <FacebookIcon className="icon-spaces"></FacebookIcon>
               <GitHubIcon className="icon-spaces"></GitHubIcon>
               <LinkedInIcon className="icon-spaces"></LinkedInIcon>
               <RedditIcon className="icon-spaces"></RedditIcon></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/78.jpg" roundedCircle />
    <Card.Body>
      <Card.Title>Tanmoy Joy</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> <FacebookIcon className="icon-spaces"></FacebookIcon>
               <GitHubIcon className="icon-spaces"></GitHubIcon>
               <LinkedInIcon className="icon-spaces"></LinkedInIcon>
               <RedditIcon className="icon-spaces"></RedditIcon></small>
    </Card.Footer>
  </Card>
</CardDeck>
            </Container>
        </div>
    );
};

export default CardTeams;