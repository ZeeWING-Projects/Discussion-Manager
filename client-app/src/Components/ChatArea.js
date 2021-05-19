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
            <Container className={styles.chatArea}>
                <Row>
                    <div className={styles.chatAreaHeader}>
                        <div className={styles.selectedChatContactName}>
                            <h3>Zeeshan</h3>
                        </div>
                        <div className={styles.selectedChatContactLastSeen}>
                            <h6>Last seen 15h ago Local timeMay 19, 9:12 PM</h6>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className={styles.chatMessageArea}>
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
                </Row>
                <Row className={styles.messageSendArea}>
                    <Row>
                        <Col md={2} className={styles.uploadFile}>
                          <span><FontAwesomeIcon icon="upload" size="2x"/></span>  
                        </Col>
                        <Col md={6} className={styles.messageContextArea}>
                        <Form.Control  type="text" placeholder="Small text" /> 
                        </Col>
                        <Col md={2} className={styles.messageSendBtn}>
                             <Button variant="primary">Send</Button>
                        </Col>
                    </Row>
                </Row>   
            </Container>
        );
  };
  export default ChatArea

