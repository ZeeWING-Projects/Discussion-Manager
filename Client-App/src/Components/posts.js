import React,{useEffect,useState} from "react";
import profile_image from './default_image.png'
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
import { Label } from "reactstrap";

const Posts = props => {
    const [profileImage,setProfileImage]=useState(profile_image)
    return(
<div  style={{
      borderStyle: 'solid',
      borderColor:'rgb(201, 164, 164)',
      borderWidth: "5px",
      height:"100%",
      width:"100%"  
      }}>

   <Row>
       <Col md={2}>
       <Image 

style={
  {
    height:"80px",
    width:"80px"
  }
}

src={profileImage} roundedCircle />
       </Col>
       <Col md={1} style={{
     marginTop: "2%" ,
     marginRight:"10%"
      }}>
      <h4>Tuba</h4>
       </Col>
       </Row>
       <Row>
          <Col>
          <Image 

style={
  {
    height:"400px",
    width:"400px"
  }
}

src={profileImage}  />
          </Col> 
           </Row>
    </div>
    );
}
export default Posts;