import React,{useEffect,useState} from "react";
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
import { Label } from "reactstrap";

export default function DeleteAccount(){
     
    const [enableButton,setenableButton]=useState(true)
    const [passText,setPassText]=useState()

    function setAuthetication(){

        let data ={
          email:localStorage.getItem("email"),
          password: passText
        }
    
    console.log("delete account "+data)
        fetch("http:/localhost:8000/authenticationService/login",
        {
          method: 'POST',
          headers: {
                  'Content-Type': 'application/json;charset=utf-8'
          },
             body: JSON.stringify(data)
        }).then(
        response => 
        {
          return response.json();
        },
    
        error=>
        {
         console.log(error)
        }
    
        ).then(data=>{
            console.log(data)
            const {responseMessage,responseCode,userId}=data;
            if(responseCode===1)
            {
                setenableButton(false)
            }
           else{
            setenableButton(true)
           }
           
        })
    
    
    
    
      
        }
    
   


    function deleteAccount(){
        let data ={
           userUid:localStorage.getItem("userUid")
           
        }

    
    console.log("delete account "+data)
        fetch("http://localhost:8000/accountsService/deleteAccountRouter",
        {
          method: 'POST',
          headers: {
                  'Content-Type': 'application/json;charset=utf-8'
          },
             body: JSON.stringify(data)
        }).then(
        response => 
        {
          return response.json();
        },
    
        error=>
        {
         console.log(error)
        }
    
        ).then(data=>{
            console.log(data)
          
           
        })
    
    
    
    
      
        }
    
      
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
    <Form.Control type="password" placeholder="Password" onChange={e => setPassText(e.target.value )} />
  </Form.Group>
  </Form>
  </Col>

  <Col md={3}>

  <Button variant="dark"style={{
            marginTop:"43%",
            marginRight:"80%",
        }}  onClick={setAuthetication}>
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
  <Button variant="dark" disabled={enableButton} size="lg" block style={{
            marginTop:"5%",
            marginLeft:"80%",
        }} onClick={deleteAccount}>
    Delete Account
  </Button>
  </Col>
</Row>


        </div>
      
    );
}
