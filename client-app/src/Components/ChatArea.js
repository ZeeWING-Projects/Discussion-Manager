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
    const [flag,setFalg]=useState(0);
    const [message,setMessage]=useState( 
        {message:'cxc',
        messageType:"Sent"})
    const [listOfMessages,setListOfMessages]=useState([]);
    //Follwiing list will be loaded from server
    const [messages,setMessages]=useState([{}])
    
    function sendMessage(messageToSend)
    {
        let v = messages;
        v.push({
            message:messageToSend,
            messageSentTime:"10:40 pm",
            messageType:"Sent"
        })

        setMessages(v)

        setListOfMessages(
            v.map((itm,index)=>{
                if(itm.messageType==="Sent")
                {
                return(
                     <div key={index} className={styles.sentMessage} fluid>
                        {/* Sent  meesage */}
                        <h7>{itm.message}</h7><span className={styles.spaceSentMessage}>''''''</span>
                     </div>
                    )
                }
                else
                {
                    return(
                        <div className={styles.recievedMessage} fluid>
                            {/* Reciede meesage */}
                            <h7>{itm.message}</h7>
                         </div>
                    )
                }
            })
        )
       
    }



    console.log("Rendering")
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
                        {/* **************************************************************** MEssages ***************** */}
{
     listOfMessages
}
                          
                        </div>

            </div>
        
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
                <Form.Control  type="text" placeholder="Small text" 
                onChange={
                    (e)=>{
                        setMessage(e.target.value)
                    }
                   
                }
                /> 
               </Col> 
               <Col md={2}
               style={
                  {
                      textAlign:"right",
                      marginTop:"1%"
                  }
               }
               >
                <Button variant="primary" onClick={
                    ()=>{
                        
                        sendMessage(message)
                       
                    }
                } >Send</Button>
               </Col> 
            </Row>   
            
            </div>
        );
  };
  export default ChatArea

