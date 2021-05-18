import React,{ useState }  from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import DashboardNavbar from './DashboardNavbar'
import Profile from "./Profile";
import Chats from "./Chats";
import Home from "./Home";
import Settings from "./Settings";
import People from "./People";

import styles from './mystyle.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Nav} from "react-bootstrap";
const Dash = props => {
    const [contentArea, setContentArea] = useState(<Profile />);
    return (
        <>
        
                <DashboardNavbar />

                <Row>
                    <Col md={2}>      
                    <Nav  className="flex-column">
                           <Nav.Item className={styles.navLink}
                           onClick={()=>{
                            setContentArea(<Profile/>)
                           }}
                           ><FontAwesomeIcon icon="user-circle" size="4x" className="mt-4"/><div>Profile</div></Nav.Item>
                           <Nav.Item className={styles.navLink}
                            onClick={()=>{
                            setContentArea(<Home/>)
                            }}
                           ><FontAwesomeIcon icon="home" size="4x" className="mt-4"/><div>Home</div></Nav.Item>

                          <Nav.Item className={styles.navLink}
                           onClick={()=>{
                            setContentArea(<Chats/>)
                            }}
                          ><FontAwesomeIcon icon="comments" size="4x" className="mt-4"/><div>Chat</div></Nav.Item>
                          <Nav.Item className={styles.navLink}
                           onClick={()=>{
                            setContentArea(<People/>)
                            }}
                          ><FontAwesomeIcon icon="users" size="4x" className="mt-4"/><div>Make contacts</div></Nav.Item>
          
                          <Nav.Item className={styles.navLink}
                           onClick={()=>{
                            setContentArea(<Settings/>)
                            }}
                          ><FontAwesomeIcon icon="cogs" size="4x" className="mt-4"/><div>Settings</div></Nav.Item>
                    </Nav> 
                    </Col>
                    <Col className="bg-info">
                            {contentArea}
                    </Col> 
                </Row>

           
        </>
        );
  };
  const Dashboard = withRouter(Dash);
  export default Dashboard