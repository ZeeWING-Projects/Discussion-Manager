import React,{useEffect,useState} from "react";
import home from './home.png'
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
import TableScrollbar from 'react-table-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const People = props => {
  
    //Now here we will make a call to our API for fetching our the contacts information.
    const [peopleProfileCard,setPeopleProfileCard]=useState(<div>Servcer is not responding</div>)

    const [serverResponse,setServerResponse]=useState({})

    function sendConnectionRequest(userEmail)
    {
        console.log("this is "+userEmail)   
    }

    function loadContacts()
    {
        fetch("http://localhost:8000/chatService/loadAllUsersList").then(
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

     }catch(e)
        {
            
        }
          
       

        })
       
    }

    function addToContact(e,a,b){
    //  console.log(event.target.sibillings())
    console.log(a)
    e.preventDefault()
    }

    function setDataIntoList()
    {
        let list=[]

        console.log(Object.values(serverResponse))
        Object.keys(serverResponse).map((rec)=>{
            var record = serverResponse[rec];
            list.push({
                userUid:record.userUid,
                userName:record.userName,
                userEmail:record.userEmail,
                userMobileNumber:record.userMobileNumber,
                profileImage:record.profileImage,
                statusStatement:record.statusStatement
            })
        })

        setPeopleProfileCard(list.map((record)=>
     {
     let rec =

     <div>  
            <Card className="shadow mt-2">
            {/* <Card.Header>Featured</Card.Header> */}
            <Card.Body>
                <Row>
                    <Col md={4}>
                         <Image src={record.profileImage} style={{height:'auto',width:'60%'}}  roundedCircle  />
                    </Col>
                    <Col md={8}>
                        <div className={styles.peopleCardContent}>
                                <h2>{record.userName}</h2>
                                <p>{record.statusStatement}</p>
                                <Row>
                                    <Col md={3}>
                                    <FontAwesomeIcon icon="thumbs-up" size="2x"/> <span>6</span>
                                    </Col>
                                    <Col md={3}>
                                    <FontAwesomeIcon icon="comments" size="2x"/> 34
                                    </Col>
                                    <Col md={3}>
                                        <span><Button variant="success">Profile</Button></span>
                                    </Col>
                                    <Col md={3}>
                                        <span>
                                        <div style={{display:"none"}}>{5}</div>    
                                        <Button variant="primary" onClick={ e => addToContact(e,record.userEmail,record.userUid)}>Connect</Button>
                                        
                                        </span>
                                    </Col>
                                </Row>      
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>

       </div>    

            return rec
          }) )
    }


    useEffect(loadContacts,[]);
    useEffect(setDataIntoList,[serverResponse])

    return (
            <Container className={styles.peopleList}>
                <Row>
                    <h1>Find the people</h1>
                </Row>
                <Row>
                    {/* All contacts cards */}
                    <Row className={styles.peopleCardList}>
                         {peopleProfileCard}     
                    </Row>
                </Row>
            </Container>
        );
  };
  export default People

