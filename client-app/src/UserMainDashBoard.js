import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Link} from 'react-router-dom'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Dashboard from './Components/Dashboard'

function UserMainDashBoard(){
    return(
        <Dashboard />
    //  <Container>
    //     <Row>
    //       <Col>1 of 3</Col>
    //     </Row>
    //     <Row>
    //       <Col>3 of 3</Col>
    //       <Col>3 of 3</Col>
    //     </Row>
    //     <Row>
    //       <Col>3 of 3</Col>
    //     </Row>
    //   </Container>
    )
}

export default UserMainDashBoard;