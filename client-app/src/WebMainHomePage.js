import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Link} from 'react-router-dom'


import WebMainHomePageNavBar from './Components/WebMainHomePageNavBar'
import WebMainHomePageBody from './Components/WebMainHomePageBody'
import WebMainHomePageFooter from './Components/WebMainHomePageFooter'

function WebMainHomePage()
{
    // Here other rest of logic will be defined
   
    
    var isLogedIn =  localStorage.getItem("isLogedIn");

    let nav;
    if(isLogedIn){
        nav = <WebMainHomePageNavBar />
    }
    else
    {
        nav=<WebMainHomePageBody />
    }

    return (

        <div
        class="bg_image"
        style={{
          backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/discussion-manager.appspot.com/o/annie-spratt-QckxruozjRg-unsplash.jpg?alt=media&token=922ba71c-45dd-4f46-85ba-6030eb80cea9")',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
          opacity:"80%"
        }}
        >
             {nav}
             <WebMainHomePageBody />

      </div>
  
    );
}

export default WebMainHomePage;