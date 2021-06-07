import React, { useState } from "react";
import { Router,Link } from "react-router";
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import ShowPosts from './posts'

const Home = props => {

    

    return (
        <div>
        <Row>
            <Col md={8}>
                <ShowPosts />
            </Col>
            </Row>
        </div>
        );
  };
  export default Home


