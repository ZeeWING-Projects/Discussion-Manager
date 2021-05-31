import React,{useEffect,useState} from "react";
import home from './home.png'
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Image,Form} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
import TableScrollbar from 'react-table-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ChatArea = props => {
  
    //Now here we will make a call to our API for fetching our the contacts information.
    

    return (
            <div>
                <Row>
                    <Col md={2}>
                     <div className={styles.chatAreaHeader}>
                        <div className={styles.selectedChatContactName}>
                            <h3>{props.selectedUserName}</h3>
                        </div>
                       
                    </div>
                    </Col>
                    <Col md={8}>
                    </Col>
                    <Col md={2}>
                    </Col>
                    
                </Row>
            </div>
        );
  };
  export default ChatArea

