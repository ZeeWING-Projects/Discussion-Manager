import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Link} from 'react-router-dom'
import LoadingMask from "react-loadingmask";

import WebMainHomePageNavBar from './Components/WebMainHomePageNavBar'
import WebMainHomePageBody from './Components/WebMainHomePageBody'
import WebMainHomePageFooter from './Components/WebMainHomePageFooter'
import styles from './Components/mystyle.module.css'; 
function WebMainHomePage()
{
    // Here other rest of logic will be defined
   
    
    var isLogedIn =  localStorage.getItem("isLogedIn");

    let nav;
    if(isLogedIn)
    {
        nav = <WebMainHomePageNavBar />
    }
    else
    {
        nav=<WebMainHomePageBody />
    }

    return (

        <div className={styles.mainWebHomePageBackground}>
            <WebMainHomePageNavBar />
            <WebMainHomePageBody />

         </div>
  
    );
}

export default WebMainHomePage;