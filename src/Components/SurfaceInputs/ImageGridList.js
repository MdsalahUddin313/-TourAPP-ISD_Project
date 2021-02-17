import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Image,Container,Row,Col} from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  const imageStyle={width:"100%",backgroundcolor:"black"};
  const rowStyle={marginTop:"5px"};

  return (
    <div className={classes.root}>
      <Container>
  <Row style={rowStyle}>
    <Col ><Image styles={imageStyle} src="https://picsum.photos/id/237/200/150" fluid /></Col>
    <Col><Image styles={imageStyle} src="https://picsum.photos/id/237/200/150" fluid /></Col>
  </Row>
  <Row style={rowStyle}>
    <Col><Image styles={imageStyle} src="https://picsum.photos/id/237/200/150" fluid /></Col>
    <Col><Image styles={imageStyle} src="https://picsum.photos/id/237/200/150" fluid /></Col>
    <Col><Image styles={imageStyle} src="https://picsum.photos/id/237/200/150" fluid /></Col>
  </Row>
  <Row style={rowStyle}>
 
    <Col xs={6}><Image styles={imageStyle} src="https://picsum.photos/id/237/200/150" fluid /></Col>
    <Col xs={6}><Image styles={imageStyle} src="https://picsum.photos/id/237/200/150" fluid /></Col>
  </Row>

</Container>




    </div>
  );
}