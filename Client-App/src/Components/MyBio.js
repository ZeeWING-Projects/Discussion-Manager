import React,{useEffect,useState} from "react";
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 

export default function MyBio(){
    return (
        <div  style={{
            marginTop:"10%",
            backgroundColor:"white"
        }}>
        <h1>this is my bio</h1>
        </div>
    );
}
