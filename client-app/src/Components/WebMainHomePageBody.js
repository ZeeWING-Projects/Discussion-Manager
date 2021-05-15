import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Link} from 'react-router-dom'
import {fluid} from 'react-bootstrap'
import styles from './mystyle.module.css'; 
function WebMainHomePageBody()
{

    return(
       <div fluid className={styles.startDiscussionDiv}>
          <button type="button" className={styles.startDiscussionBtn}>Manage your Discussion</button>
       </div>
    );
}

export default WebMainHomePageBody;