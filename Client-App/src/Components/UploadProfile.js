import React,{useEffect,useState} from "react";
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import profile_image from './default_image.png'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 

export default function UploadProfile(){
    return (
        <div  style={{
            marginTop:"10%",
           
        }}>
         <input type="file"  style={{
            color:"white",
        }}/> 
        <Image src={profile_image} roundedCircle />
    <div></div>
        </div>
    );
}
