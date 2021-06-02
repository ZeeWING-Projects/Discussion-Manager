import React,{useEffect,useState} from "react";
import profile_image from './default_image.png'
import plogo from './profile_name_logo.png'
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 


const Profile = props => {
   
     function LoadFile(e){
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload=(e)=>{
            console.warn("image data",e.target.result)
        } 
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
            <div style={
                {    marginTop: "3%",
                    borderStyle: 'solid',
                    borderColor:'rgb(201, 164, 164)',
                    borderWidth: "3px",
                    height:"15%",                    
                }
            }>
                   
                        <div style={{
                             marginTop: "3%",
                             textAlign: 'left',
                             marginLeft: "2%",
                             marginTop:"2%",
                             color: 'white',
                             paddingBottom:"10px"
                            
                        }}>
                            
                           <Image src={plogo}  style={{
                                   
                                   borderWidth: 3,
                                   borderColor: "red",
                                   borderRadius: "60%",
                                   height:"40px",
                                   width:"40px"
                                }} />
                            <span
                            style={{
                                fontSize:"25px"
                            }}
                            >
                                "set name"</span>
                        </div> 
            </div>
</div>
<div>
   
                                
<input type="file" style={{
                              marginTop: "3%",  
                              
                            }} onChange={LoadFile} />

    </div>
            </Col>
            </Row>
          
            
            </div>
       
        
        );
  };
  export default Profile


