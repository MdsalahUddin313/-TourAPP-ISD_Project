import React from 'react';
import {Container,Row,Col,Card,CardColumns} from 'react-bootstrap';
import '../Styles/aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RedditIcon from '@material-ui/icons/Reddit';

const OurProjects = () => {
    return (
        <div>
          <Container>
 <CardColumns>
  <Card>
    <Card.Img variant="top" src="https://i1.wp.com/www.traveling-up.com/wp-content/uploads/2019/04/COVER-royal-enfield-motourism-palawan-philippines-wrangler-true-wanderer.jpg?fit=1200%2C675&ssl=1" />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://banglarjamin24.com/wp-content/uploads/2020/11/%E0%A6%B7%E0%A6%BE%E0%A6%9F-%E0%A6%97%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A7%81%E0%A6%9C-%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="primary" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card className="text-center">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src="https://media.istockphoto.com/photos/weve-made-it-all-this-way-i-am-proud-picture-id904172104?k=6&m=904172104&s=612x612&w=0&h=nqsWvOdPG7oyT1J9v4bd0OtL1yWhNj4u7JsSOUcMBd4=" />
  </Card>
  <Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>
</Container>

        </div>
    );
};

export default OurProjects;