import React,{useEffect,useState} from "react";
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
import { Label } from "reactstrap";
export default function ResetPass(){
    return (
        <div  style={{
            marginTop:"10%",
            marginLeft:"10%",
            color:"white",
            borderStyle: 'solid',
            borderColor:'rgb(201, 164, 164)',
            borderWidth: "5px",
            height:"70%",
            width:"100%"  
         }}>
        <Row>
            <Col md={10}>
            <Container>
        <Form style={{
            marginTop:"10%",
           marginLeft:"30%",
           color:"white"
           
        }}>
  <Form.Group controlId="previousPass">
    <Form.Label  style={{
            marginRight:"60%",
           color:"white"
           
        }}>Enter Previous Password: </Form.Label>
    <Form.Control type="Text" placeholder="Enter  Previous Password" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label style={{
            marginRight:"60%",
           color:"white"
           
        }}>Enter New Password</Form.Label>
    <Form.Control type="password" placeholder="New Password" />
  </Form.Group>
  <Button variant="dark" type="submit" style={{
            marginTop:"3%",
     
        }}>
    Submit
  </Button>
</Form>
</Container>
</Col>
</Row>
        </div>
    );
}
