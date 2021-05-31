import React,{useEffect,useState} from "react";
import home from './home.png'
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Form,FormControl} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
import TableScrollbar from 'react-table-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Contacts = props => {
  
    //Now here we will make a call to our API for fetching our the contacts information.
    const [peopleProfileCard,setPeopleProfileCard]=useState(<div>Servcer is not responding</div>)

    const [serverResponse,setServerResponse]=useState({})

    function sendConnectionRequest(userEmail)
    {
        console.log("this is "+userEmail)   
    }

    function loadContacts()
    {
        let data =
        {
            userUid:localStorage.getItem("userUid")
        }
        
        fetch("http://localhost:8000/chatService/loadAllContacts",
        {
          method: 'POST',
          headers: {
                  'Content-Type': 'application/json;charset=utf-8'
          },
             body: JSON.stringify(data)
        }).then(
        response => 
        {
          return response.json();
        },
        error=>
        {
          //on error
          
          console.log(error)
        }
    
        ).then(data=>{
          //on sucess.
     try
     {
        setServerResponse(data)
        console.log(data)
     }catch(e)
        {
            
        }

        })
       
    }

   

    function setDataIntoList()
    {
       const selectContact =  function (e,uid,profile,name)
        {
            props.chatAreaTrigger(uid,name,profile)
        }  


        let list=[]

        console.log(Object.values(serverResponse))
        Object.keys(serverResponse).map((rec)=>{
            var record = serverResponse[rec];
                list.push({
                    userUid:record.contactUserUid,
                    userName:record.contactUserName,
                    contactUserUid:record.contactUserUid,
                    profileImage:record.contactUserProfile,
                    status:record.status
                })
        })

     setPeopleProfileCard(list.map((record)=>
     {
      console.log(record.userName)
     let rec =
     <div> 
         <div style={
        {
        cursor:"pointer",
        width:"100%",
        height:"90px",
        borderStyle:"inset",
        borderColor:"white",
        borderWidth:"1px"
        }} onClick={e => selectContact(e,record.userUid,record.profileImage,record.userName)}>
                <h5 style={
                    {
                    paddingLeft:"10px",
                    paddingTop:"10px",    
                    textAlign:'left',
                    fontSize:"25px",
                    color:"white"
                    }
                    }>{record.userName}</h5>
                <div style={
                    {
                        color:"white",
                        fontSize:"14px",
                        textAlign:"right",
                        marginRight:"10px"
                    }
                }>Status : Online</div> 

          </div> 

           
         </div> 
            return rec
          }) )
    }


    useEffect(loadContacts,[]);
    useEffect(setDataIntoList,[serverResponse])

    return (
    <Container >
        <div>
            
        </div>
        <Row className={styles.ContactsList}>
                
                <div className={styles.contactsListRow}>
                     {peopleProfileCard}
                </div>                
        </Row>

            </Container>
        );
  };
  export default Contacts

