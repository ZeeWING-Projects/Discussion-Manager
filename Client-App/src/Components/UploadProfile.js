import React,{useEffect,useState} from "react";
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import profile_image from './ImagePreview_logo.png'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
import { Label } from "reactstrap";

export default function UploadProfile(){
    let imagePreview="Image Preview"
    return (
        <div  style={{
            marginTop:"10%",
           
        }}>
            <Row>
                <Col md={8}>
         <input type="file"  style={{
            color:"white",
            marginLeft: "60%",
            
        }}/> 
        </Col>
        </Row>
        <Row>
        <Col md={12}>
            <div>
                
        <Image src={profile_image} roundedCircle style={{
          marginTop:"5%"
            
        }} />
        </div>
        </Col>
   </Row>
        <Row>
            <Col md={12}>
                <Label style={{
    marginTop: "3%",
   fontSize: "25px",
   color:"White"
}}>
    {imagePreview}
</Label>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
            <Button variant="dark" size="lg" block style={{
                              marginTop: "5%",  
                              marginLeft: "115%"
                            }} >

 Set Image </Button>
 </Col>
                </Row>
        </div>
    );
}

