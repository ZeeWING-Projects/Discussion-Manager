import logo from './logo.svg';
import './App.css';
import WebMainHomePage from './WebMainHomePage'
import UserMainDashBoard from './UserMainDashBoard'
import {Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <WebMainHomePage /> */}
      <Route exact path="/" component={WebMainHomePage}></Route>
      <Route exact path="/userDashBorad" component={UserMainDashBoard}></Route>
    </div>
  );
}

export default App;
