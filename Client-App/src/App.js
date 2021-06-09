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

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUsers,faUserCircle,faComments,faMailBulk,faCogs, faHome,faAddressBook,faThumbsUp,faSearch, faUpload,faBell} from '@fortawesome/free-solid-svg-icons'

library.add(faUsers, faUserCircle, faComments,faMailBulk,faCogs,faHome,faAddressBook,faThumbsUp,faSearch,faUpload,faBell)

function App() {
  console.log("values  "+localStorage.getItem("isLogedIn"))
 
  let main_page=<Route path="/Home" component={Home}></Route>
  if(localStorage.getItem("isLogedIn")==null || localStorage.getItem("isLogedIn")==="false")
  {
    console.log("Here")
    main_page=<Route path="/" component={NewUserMainPage}></Route>
    
  }
  else
  {
    let main_page=<Route path="/Home" component={Home}></Route>
  }
  return (
    <div className="App">
      <WebMainHomePageNavBar />
      {main_page}
      <Route path="/Profile" component={Profile}></Route>
      <Route path="/Chats" component={Chats}></Route>
      <Route path="/People" component={People}></Route>
      <Route path="/Support" component={Support}></Route>
      <Route path="/FriendRequests" component={FriendRequests}></Route>
    </div>
  );
}

export default App;

