import React,{useEffect,useState} from "react";
import profile_image from './default_image.png'
import plogo from './profile_name_logo.png'
import MyBio from './MyBio'
import PassReset from './ResetPass'
import DeleteAccount from './DeleteAccount'
import SetStatus from './SetStatus'
import UploadProfile from './UploadProfile'
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 


const Profile = props => {
   const [variableScreen,setVariableScreen]= useState("set screen")

   function setBio(){
    setVariableScreen(<MyBio />)
   }

   function resetPass(){
    setVariableScreen(<PassReset />)
   }
   function DeleteAcc(){
    setVariableScreen(<DeleteAccount />)
   }
   function setStatus(){
    setVariableScreen(<SetStatus />)
   }
   function uploadProfile(){
    setVariableScreen(<UploadProfile />)
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
                              
                            }} onClick={uploadProfile}>

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
                              
                            }} onClick={setStatus}>

  Set Status </Button>
      </div>        
      <div>
    <Button variant="dark" size="lg" block style={{
                              marginTop: "5%",  
                              
                            }} onClick={DeleteAcc}>

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


