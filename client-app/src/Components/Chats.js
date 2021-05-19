import React,{useEffect,useState} from "react";
import home from './home.png'
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
import TableScrollbar from 'react-table-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Contacts from './Contacts'
import ChatArea from './ChatArea'
const Chats = props => {
  
    //Now here we will make a call to our API for fetching our the contacts information.


    return (
            <Container className={styles.chatList}>
                <Row>
                   <Col md={4}>
                       <Contacts />
                   </Col>
                   <Col md={5}>
                       <ChatArea />
                   </Col>
                   <Col md={3}>
                       <h5>Profile</h5>
                   </Col>
                   
                </Row>
            </Container>
        );
  };
  export default Chats

