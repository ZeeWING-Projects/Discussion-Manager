import React from "react";
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row,Col} from 'react-bootstrap'
import PostsList from './postLists'
const Home = props => {
    return (
        <div>        
        {/* //    Here we will call the components. */}
        <Row>
            <Col md={2}>
                <h3>For latest news may be</h3>
            </Col>
            <Col md={8}>
                <div style={
                    {
                        color:"white",
                        fontSize:"40px",
                        textAlign:"left",
                        marginLeft:"10%",
                        marginTop:"5%"
                    }
                }>
                    News 
                </div>
                <PostsList />
            </Col>
            <Col md={2}>
                <h3>For uploading post</h3>
           </Col>

        </Row>

        </div>
        );
  };
  export default Home
