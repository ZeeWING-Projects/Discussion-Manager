import React,{useEffect,useState} from "react";
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
import {Label } from "reactstrap";
export default function SetStatus(props){

    const [onlineStatus,setonlinestatus]=useState(props.profile_onlineStatus)


    let data ={
      userUid: localStorage.getItem("userUid")
        
     }
  
  console.log(data)
     fetch("http://localhost:8000/profileService/UpdateStatusRouter",
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
            
     })

    return (
        <div  style={{
         
            marginTop:"25%",
            marginLeft:"33%",
            color:"white",
            borderStyle: 'solid',
            borderColor:'rgb(201, 164, 164)',
            borderWidth: "5px",
            height:"20%",
            width:"50%"  
         }}>
    <Row>
        <Col md={12}>
        <Form style={{
            marginTop:"8%",
        }}>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Show when you're active"
    checked={onlineStatus}
  />
  </Form>
        </Col>
        </Row>
        </div>
    );
}
