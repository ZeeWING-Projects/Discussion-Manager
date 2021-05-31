import logo from './logo.svg';
import './App.css';
import WebMainHomePage from './WebMainHomePage'
import UserMainDashBoard from './UserMainDashBoard'
import LoginToAccount from './Components/LoginToAccount'
import Profile from './Components/Profile'
import People from './Components/People'
import Chats from './Components/Chats'
import Home from './Components/Home'
import Support from './Components/Support'
import WebMainHomePageNavBar from  './Components/WebMainHomePageNavBar'
import {Route,Link, Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUsers,faUserCircle,faComments,faMailBulk,faCogs, faHome,faAddressBook,faThumbsUp,faSearch, faUpload,faBell} from '@fortawesome/free-solid-svg-icons'

library.add(faUsers, faUserCircle, faComments,faMailBulk,faCogs,faHome,faAddressBook,faThumbsUp,faSearch,faUpload,faBell)

function App() {
  localStorage.setItem("isLogedIn",false);
  return (
    <div className="App">
      <WebMainHomePageNavBar />
      <Route path="/Home" component={Home}></Route>
      <Route path="/Profile" component={Profile}></Route>
      <Route path="/Chats" component={Chats}></Route>
      <Route path="/People" component={People}></Route>
      <Route path="/Support" component={Support}></Route>
      
    </div>
  );
}

export default App;
