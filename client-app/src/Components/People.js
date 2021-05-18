import React from "react";
import home from './home.png'
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Button,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
import TableScrollbar from 'react-table-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const People = props => {
   
    return (
            <Container className={styles.peopleList}>
                <Row>
                    <h1>Find the people</h1>
                </Row>
                <Row>
                    {/* All contacts cards */}
                    <Row>
                        {/* Contact one */}
                        <Card className="shadow mt-2">
                            {/* <Card.Header>Featured</Card.Header> */}
                            <Card.Body>
                                <Row>
                                    <Col lg={4}>
                                         <Image src="https://firebasestorage.googleapis.com/v0/b/discussion-manager.appspot.com/o/1620937572714-WhatsApp%20Image%202021-04-07%20at%203.00.32%20AM.jpeg?alt=media&token=2c608d66-3fcc-40f4-9633-05e97f7e8c0f" style={{height:'auto',width:'60%'}}  roundedCircle  />
                                    </Col>
                                    <Col lg={8}>
                                        <div className={styles.peopleCardContent}>
                                                <h2>Zeeshan</h2>
                                                <p>has been the industry's stan and scrambled
                                                     it to make arised in the 1
                                                      960s with the release of Letraset sheets </p>
                                                <Row>
                                                    <Col lg={3}>
                                                    <FontAwesomeIcon icon="thumbs-up" size="2x"/> <span>6</span>
                                                    </Col>
                                                    <Col lg={3}>
                                                    <FontAwesomeIcon icon="comments" size="2x"/> 34
                                                    </Col>
                                                    <Col lg={3}>
                                                        <span><Button variant="success">Profile</Button></span>
                                                    </Col>
                                                    <Col lg={3}>
                                                        <span><Button variant="primary">Contact</Button></span>
                                                    </Col>
                                                    
                                                </Row>      
                                        </div>
                                    </Col>
                                </Row>
                            {/* <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>




                        <Card className="shadow mt-2">
                            {/* <Card.Header>Featured</Card.Header> */}
                            <Card.Body>
                                <Row>
                                    <Col lg={4}>
                                         <Image src="https://firebasestorage.googleapis.com/v0/b/discussion-manager.appspot.com/o/1620937572714-WhatsApp%20Image%202021-04-07%20at%203.00.32%20AM.jpeg?alt=media&token=2c608d66-3fcc-40f4-9633-05e97f7e8c0f" style={{height:'auto',width:'60%'}}  roundedCircle  />
                                    </Col>
                                    <Col lg={8}>
                                        <div className={styles.peopleCardContent}>
                                                <h2>Zeeshan</h2>
                                                <p>has been the industry's stan and scrambled
                                                     it to make arised in the 1
                                                      960s with the release of Letraset sheets </p>
                                                <Row>
                                                    <Col lg={3}>
                                                    <FontAwesomeIcon icon="thumbs-up" size="2x"/> <span>6</span>
                                                    </Col>
                                                    <Col lg={3}>
                                                    <FontAwesomeIcon icon="comments" size="2x"/> 34
                                                    </Col>
                                                    <Col lg={3}>
                                                        <span><Button variant="success">Profile</Button></span>
                                                    </Col>
                                                    <Col lg={3}>
                                                        <span><Button variant="primary">Contact</Button></span>
                                                    </Col>
                                                    
                                                </Row>      
                                        </div>
                                    </Col>
                                </Row>
                            {/* <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>



                        <Card className="shadow mt-2">
                            {/* <Card.Header>Featured</Card.Header> */}
                            <Card.Body>
                                <Row>
                                    <Col lg={4}>
                                         <Image src="https://firebasestorage.googleapis.com/v0/b/discussion-manager.appspot.com/o/1620937572714-WhatsApp%20Image%202021-04-07%20at%203.00.32%20AM.jpeg?alt=media&token=2c608d66-3fcc-40f4-9633-05e97f7e8c0f" style={{height:'auto',width:'60%'}}  roundedCircle  />
                                    </Col>
                                    <Col lg={8}>
                                        <div className={styles.peopleCardContent}>
                                                <h2>Zeeshan</h2>
                                                <p>has been the industry's stan and scrambled
                                                     it to make arised in the 1
                                                      960s with the release of Letraset sheets </p>
                                                <Row>
                                                    <Col lg={3}>
                                                    <FontAwesomeIcon icon="thumbs-up" size="2x"/> <span>6</span>
                                                    </Col>
                                                    <Col lg={3}>
                                                    <FontAwesomeIcon icon="comments" size="2x"/> 34
                                                    </Col>
                                                    <Col lg={3}>
                                                        <span><Button variant="success">Profile</Button></span>
                                                    </Col>
                                                    <Col lg={3}>
                                                        <span><Button variant="primary">Contact</Button></span>
                                                    </Col>
                                                    
                                                </Row>      
                                        </div>
                                    </Col>
                                </Row>
                            {/* <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>


                        <Card className="shadow mt-2">
                            {/* <Card.Header>Featured</Card.Header> */}
                            <Card.Body>
                                <Row>
                                    <Col lg={4}>
                                         <Image src="https://firebasestorage.googleapis.com/v0/b/discussion-manager.appspot.com/o/1620937572714-WhatsApp%20Image%202021-04-07%20at%203.00.32%20AM.jpeg?alt=media&token=2c608d66-3fcc-40f4-9633-05e97f7e8c0f" style={{height:'auto',width:'60%'}}  roundedCircle  />
                                    </Col>
                                    <Col lg={8}>
                                        <div className={styles.peopleCardContent}>
                                                <h2>Zeeshan</h2>
                                                <p>has been the industry's stan and scrambled
                                                     it to make arised in the 1
                                                      960s with the release of Letraset sheets </p>
                                                <Row>
                                                    <Col lg={3}>
                                                    <FontAwesomeIcon icon="thumbs-up" size="2x"/> <span>6</span>
                                                    </Col>
                                                    <Col lg={3}>
                                                    <FontAwesomeIcon icon="comments" size="2x"/> 34
                                                    </Col>
                                                    <Col lg={3}>
                                                        <span><Button variant="success">Profile</Button></span>
                                                    </Col>
                                                    <Col lg={3}>
                                                        <span><Button variant="primary">Contact</Button></span>
                                                    </Col>
                                                    
                                                </Row>      
                                        </div>
                                    </Col>
                                </Row>
                            {/* <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>

                    </Row>
                </Row>
            </Container>
        );
  };
  export default People

