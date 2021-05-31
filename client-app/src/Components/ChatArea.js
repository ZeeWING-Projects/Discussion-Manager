import React,{useEffect,useState} from "react";
import logo from './logo192.png'
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
            {/* Header Aread */}
            <div style={
                {
                    borderStyle: 'solid',
                    borderColor:'rgb(201, 164, 164)',
                    borderWidth: "1px",
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
                            
                            <Image src={logo}  style={{
                                   
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
                                {props.selectedUserName}</span>
                            
                        </div>
                     
            </div>
            
            {/* Messages areas */}
            <div
            style={
                {
                   
                    height:"100%",
                    
                }
            }

            >
            <div className={styles.listOfMessages}>
                                <div className={styles.recievedMessage} fluid>
                                    {/* Reciede meesage */}
                                    <h7>Heyy Zeeshan</h7>
                                </div>

                                <div className={styles.sentMessage} fluid>
                                    {/* Sent  meesage */}
                                    <h7>Hello tuba</h7><span className={styles.spaceSentMessage}>''''''</span>
                                </div>

                                <div className={styles.recievedMessage} fluid>
                                    {/* Reciede meesage */}
                                    <h7>How is going on ?</h7>
                                </div>

                                <div className={styles.recievedMessage} fluid>
                                    {/* Reciede meesage */}
                                    <h7>Whats status?</h7>
                                </div>

                                <div className={styles.sentMessage} fluid>
                                    {/* Sent  meesage */}
                                    <h7>Every this fine... </h7><span className={styles.spaceSentMessage}>''''''</span>
                                </div>

                                <div className={styles.sentMessage} fluid>
                                    {/* Sent  meesage */}
                                    <h7>Working on chat module...</h7><span className={styles.spaceSentMessage}>''''''</span>
                                </div>

                                <div className={styles.sentMessage} fluid>
                                    {/* Sent  meesage */}
                                    <h7>What about you</h7><span className={styles.spaceSentMessage}>''''''</span>
                                </div>

                                <div className={styles.sentMessage} fluid>
                                    {/* Sent  meesage */}
                                    <h7>Which module on which you are working???</h7><span className={styles.spaceSentMessage}>''''''</span>
                                </div>

                                <div className={styles.recievedMessage} fluid>
                                    {/* Reciede meesage */}
                                    <h7>Fine ...Every thing is smooth...</h7>
                                </div>

                                <div className={styles.recievedMessage} fluid>
                                    {/* Reciede meesage */}
                                    <h7>Working on posts model</h7>
                                </div>
                                

                          </div>

            </div>
            {/* <span><FontAwesomeIcon icon="upload" size="2x"/></span>  */}
            {/* <Form.Control  type="text" placeholder="Small text" />  */}
            {/* <Button variant="primary">Send</Button>/ */}

            {/* Sending options */}
            <Row className={styles.messageSendArea}>
               <Col md={1}
               style={
                  {
                      textAlign:"left",
                      marginTop:"1%",
                    
                  }
               }
               >
                <FontAwesomeIcon icon="upload" size="2x"/>
               </Col> 
               <Col md={9}
               style={
                  {
                      textAlign:"left",
                      marginTop:"1%",
                     
                  }
               }
               >
                <Form.Control  type="text" placeholder="Small text" /> 
               </Col> 
               <Col md={2}
               style={
                  {
                      textAlign:"right",
                      marginTop:"1%"
                  }
               }
               >
                <Button variant="primary">Send</Button>
               </Col> 
            </Row>   
            
            </div>
        );
  };
  export default ChatArea

