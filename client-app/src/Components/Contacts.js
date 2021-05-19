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


    return (
    <Container >
        <Row className={styles.chatCotactsListPortionHead}>
        <h5 className={styles.chatCotactsListPortionTitle}>Contacts List</h5>   
        <Form className={styles.searchBarOfContactsList} inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="submit"><FontAwesomeIcon  icon="search" size="1x" /></Button>
        </Form>

        </Row>
        <Row className={styles.ContactsList}>
                
                <div className={styles.contactsListRow}>
                <Card className="shadow mt-2 w-100 h-20">
                        {/* <Card.Header>Featured</Card.Header> */}
                    <Card.Body >    
                        <h5 >Zeeshan</h5>
                        <div className={styles.statusText}>Status : Online</div>
                    </Card.Body>
                </Card>
                </div>

                <div className={styles.contactsListRow}>
                <Card className="shadow mt-2 w-100 h-20">
                        {/* <Card.Header>Featured</Card.Header> */}
                    <Card.Body >    
                        <h5 >Zeeshan</h5>
                        <div className={styles.statusText}>Status : Online</div>
                    </Card.Body>
                </Card>
                </div>

                <div className={styles.contactsListRow}>
                <Card className="shadow mt-2 w-100 h-20">
                        {/* <Card.Header>Featured</Card.Header> */}
                    <Card.Body >    
                        <h5 >Zeeshan</h5>
                        <div className={styles.statusText}>Status : Online</div>
                    </Card.Body>
                </Card>
                </div>

                <div className={styles.contactsListRow}>
                <Card className="shadow mt-2 w-100 h-20">
                        {/* <Card.Header>Featured</Card.Header> */}
                    <Card.Body >    
                        <h5 >Zeeshan</h5>
                        <div className={styles.statusText}>Status : Online</div>
                    </Card.Body>
                </Card>
                </div>

                <div className={styles.contactsListRow}>
                <Card className="shadow mt-2 w-100 h-20">
                        {/* <Card.Header>Featured</Card.Header> */}
                    <Card.Body >    
                        <h5 >Zeeshan</h5>
                        <div className={styles.statusText}>Status : Online</div>
                    </Card.Body>
                </Card>
                </div>

                

        </Row>

            </Container>
        );
  };
  export default Contacts

