import logo from './logo.svg';
import './App.css';
import WebMainHomePage from './WebMainHomePage'
import UserMainDashBoard from './UserMainDashBoard'
import LoginToAccount from './Components/LoginToAccount'
import {Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUsers,faUserCircle,faComments,faMailBulk,faCogs, faHome,faAddressBook,faThumbsUp } from '@fortawesome/free-solid-svg-icons'

library.add(faUsers, faUserCircle, faComments,faMailBulk,faCogs,faHome,faAddressBook,faThumbsUp)

function App() {
  localStorage.setItem("isLogedIn",false);
  return (
    <div className="App">
      
      {/* <WebMainHomePage /> */}
      <Route exact path="/" component={WebMainHomePage}></Route>
      <Route exact path="/userDashBorad" component={UserMainDashBoard}></Route>
      <Route exact path="/loginToAccount" component={LoginToAccount}></Route>
      <Route path="/userMainDashBoard" component={UserMainDashBoard}></Route>
    </div>
  );
}

export default App;
