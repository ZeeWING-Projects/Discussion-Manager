import React,{useEffect,useState} from "react";
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
import { Label } from "reactstrap";

export default function DeleteAccount(){
    return (
        <div  style={{
            marginTop:"15%",
            marginLeft:"10%",
            color:"white",
            borderStyle: 'solid',
            borderColor:'rgb(201, 164, 164)',
            borderWidth: "5px",
            height:"60%",
            width:"100%"  
         }}>
        <Row>
            <Col md={8}>
           
        <Form style={{
            marginTop:"10%",
           marginLeft:"20%",
           color:"white"
           
        }}>
        
  <Form.Group controlId="previousPass">
    <Form.Label  style={{
            marginRight:"30%",
           color:"white"
           
        }}>Enter Your Password to confirm: </Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  </Form>
  </Col>

  <Col md={3}>

  <Button variant="dark"style={{
            marginTop:"43%",
            marginRight:"80%",
        }}>
    Check
  </Button>
  </Col>
</Row>
  <Row>
      <Col md={8}>
      <Label style={{
           marginTop:"1%",
           color: 'rgb(201, 29, 18)',
           fontSize:"20px",
           marginLeft:"5%",
        }}>
          Are you sure you want to delete this account?
      </Label>
      </Col>
      </Row>
  <Row>
      <Col md={4}>
  <Button variant="dark" size="lg" block style={{
            marginTop:"5%",
            marginLeft:"80%",
        }}>
    Delete Account
  </Button>
  </Col>
</Row>


        </div>
      
    );
}
