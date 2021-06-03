import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile'
import People from './Components/People'
import Chats from './Components/Chats'
import Home from './Components/Home'
import Support from './Components/Support'
import NewUserMainPage from './Components/NewUserMainPage'
import WebMainHomePageNavBar from  './Components/WebMainHomePageNavBar'
import FriendRequests from './Components/FriendRequests'
import {Route,Link, Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect,useState} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUsers,faUserCircle,faComments,faMailBulk,faCogs, faHome,faAddressBook,faThumbsUp,faSearch, faUpload,faBell} from '@fortawesome/free-solid-svg-icons'

library.add(faUsers, faUserCircle, faComments,faMailBulk,faCogs,faHome,faAddressBook,faThumbsUp,faSearch,faUpload,faBell)

function App() {
  
  let main_page=<Route path="/Home" component={Home}></Route>

  const [navBar,setNavBar]=useState(<WebMainHomePageNavBar />)
  const [body,setBody]=useState(main_page)
  
  console.log("values  "+localStorage.getItem("isLogedIn"))
 
  if(localStorage.getItem("isLogedIn")==null || localStorage.getItem("isLogedIn")==="false")
  {
    console.log("Here")
    main_page=<Route path="/" component={NewUserMainPage}></Route> 
  }
  else
  {
    let main_page=<Route path="/Home" component={Home}></Route>
  }
  useEffect(()=>{

    setInterval(()=>{

      fetch('http://localhost:8000/serverStatusService/serverStatus').then((resp)=>{
        return resp.json()
      },(error)=>{
        console.log(error)
      }).then((data)=>{
        console.log(data)
        try{
          var g
          try{
           g = data.responseCode
          }
          catch(e){}
        if(g===1)
        {
            
        }
        else
        {
          setNavBar("")
          setBody("Server is not responding...!! Please try later.")
        }
      }catch(e){

      }
      })

    },3000)


  },[])
  return (
    <div className="App">
      {navBar}
      {body}
      <Route path="/Profile" component={Profile}></Route>
      <Route path="/Chats" component={Chats}></Route>
      <Route path="/People" component={People}></Route>
      <Route path="/Support" component={Support}></Route>
      <Route path="/FriendRequests" component={FriendRequests}></Route>

    </div>
  );
}

export default App;
