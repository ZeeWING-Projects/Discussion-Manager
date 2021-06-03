import React,{useEffect,useState} from "react";
import profile_image from './default_image.png'
import plogo from './profile_name_logo.png'
import setMyBio from './MyBio'
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 


const Profile = props => {
   const [variableScreen,setVariableScreen]= useState("set screen")
   function setBio(){
    setVariableScreen(<setMyBio />)
   }
   function resetPass(){
    setVariableScreen(<setMyBio />)
   }


    return (
        <div>
         
            <Row>
            <Col xs={4} md={3}  style={
                  {
                     
                      marginTop:"1%",
                    
                  }
               }>
                      
<Image src={profile_image} roundedCircle />
    <div>
    <Button variant="dark" size="lg" block style={{
                              marginTop: "3%",  
                              
                            }} onClick={setBio}>

  My Bio </Button>
      </div>  
      <div>
    <Button variant="dark" size="lg" block style={{
                              marginTop: "5%",  
                              
                            }} onClick={()=>{}}>

 Upload New Profile Pic </Button>
      </div>  
      <div>
    <Button variant="dark" size="lg" block style={{
                              marginTop: "5%",  
                              
                            }} onClick={resetPass}>

  Reset Password </Button>
      </div>        
      <div>
    <Button variant="dark" size="lg" block style={{
                              marginTop: "5%",  
                              
                            }} onClick={()=>{}}>

  Set Status </Button>
      </div>        
      <div>
    <Button variant="dark" size="lg" block style={{
                              marginTop: "5%",  
                              
                            }} onClick={()=>{}}>

  Delete Account </Button>
      </div>        
  
                                
{/* <input type="file" style={{
                              marginTop: "3%",  
                              
                            }} /> */}


            </Col>
            <Col xs={8} md={8}>
             
           {variableScreen}
</Col>
            </Row>
             
            
            </div>
       
        
        );
  };
  export default Profile


