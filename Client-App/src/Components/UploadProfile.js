import React,{useEffect,useState} from "react";
import { Router,Link } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import profile_image from './ImagePreview_logo.png'
import {Container,Row,Col,Card,Button,Form,FormControl,Image} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
import { Label } from "reactstrap";
import firebase from 'firebase'

export default function UploadProfile(){
    let imagePreview="Image Preview"

    useEffect(()=>{
 fetch('http://localhost:8000/accountsService/getTheFireBaseConfugration').then(response => response.json())
  .then((data)=>{
      const {apiKeyResp,authDomainResp,databaseURLResp,projectIdResp,storageBucketResp,messagingSenderIdResp,appIdResp}=data
      var firebaseConfig = {
      apiKey: data.apiKey,
      authDomain: data.authDomain,
      databaseURL: data.databaseURL,
      projectId: data.projectId,
      storageBucket: data.storageBucket,
      messagingSenderId: data.messagingSenderId,
      appId:data.appId
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log(firebase);
    
  });
    },[])

    function uploadImage(e) {
        const ref = firebase.storage().ref();
        const file = e.target.files[0];
        const name = +new Date() + "-" + file.name;
        const metadata = {
          contentType: file.type
        };
        const task = ref.child(name).put(file, metadata);
        task
          .then(snapshot => snapshot.ref.getDownloadURL())
          .then(url => {
            console.log("URL"+url);
            //here will make call to our api .. which will make enntry for new post..
          })
          .catch(console.error);
      }
     
    return (
        <div  style={{
            marginTop:"10%",
           
        }}>
            <Row>
                <Col md={8}>
         <input type="file"  style={{
            color:"white",
            marginLeft: "60%",
            
        }}
        onChange={uploadImage}
        /> 
        </Col>
        </Row>
        <Row>
        <Col md={12}>
            <div>
                
        <Image src={profile_image} roundedCircle style={{
          marginTop:"5%"
            
        }} />
        </div>
        </Col>
   </Row>
        <Row>
            <Col md={12}>
                <Label style={{
    marginTop: "3%",
   fontSize: "25px",
   color:"White"
}}>
    {imagePreview}
</Label>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
            <Button variant="dark" size="lg" block style={{
                              marginTop: "5%",  
                              marginLeft: "115%"
                            }} >

 Set Image </Button>
 </Col>
                </Row>
        </div>
    );
}

