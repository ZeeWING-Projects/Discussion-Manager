import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Link,useHistory} from 'react-router-dom'
import {Alert} from 'react-bootstrap'
import LoginToAccount from './LoginToAccount'
import styles from './mystyle.module.css'; 
function WebMainHomePageBody()
{
   var flag = false;
   const history = useHistory();
   const handleClick = () =>{
      var isLogedIn  = localStorage.getItem("isLogedIn")
      console.log(isLogedIn)
       if(isLogedIn==false)
       {
         history.push('/loginToAccount');
       }
       else
       {
         console.log("here") 
         history.push('/UserMainDashBoard');
       }
       
      }

   return(
       <div fluid className={styles.startDiscussionDiv}>
           <LoginToAccount  buttonLabel="Login" type="BodyLogin"/>
       </div>
    );

}

// function login()
// {
//    //  const history = useHistory();
//    var state = localStorage.getItem("isLogedIn")
//    if(state===false)
//    {
     
//    }
//    else
//    {
//       //  history.pushState(null, 'LoginToAccount');
//       console.log(state)
//    }
// }
export default WebMainHomePageBody;