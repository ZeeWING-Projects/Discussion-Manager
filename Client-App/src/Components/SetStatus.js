import React,{useEffect,useState} from "react";
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 

export default function SetStatus(){
    return (
        <div  style={{
            marginTop:"10%",
            backgroundColor:"white",
            fontSize:"100px"
        }}>
        <h1>this is Set status</h1>
        </div>
    );
}
