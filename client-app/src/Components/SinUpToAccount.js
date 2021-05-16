import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Form,Nav} from 'react-bootstrap'

const SinUpToAccount = (props) => {
  const {
    buttonLabel,
    className,
    type
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = ()=>{
      setModal(!modal)
      console.log(modal)
    }
    
    
    let btn =    <Nav.Item><button  className="btn btn-outline-light mr-2" onClick={toggle}>{buttonLabel}</button></Nav.Item>  
    console.log(type)
    if(type==="NavBar")
    {
      btn =  <Nav.Item><button  className="btn btn-outline-light mr-2" onClick={toggle}>{buttonLabel}</button></Nav.Item>
    }
    
  return (
    <div>
      {btn}
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}  centered>
        <ModalHeader toggle={toggle}>Create Account</ModalHeader>
        <ModalBody>
           
        <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />

                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number" />
                    
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                                   We'll never share your email with anyone else.
                    </Form.Text>

                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                            Please do not enter the password of email, enter new password
                    </Form.Text>

                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" />
                    
                </Form.Group>


                
            </Form>
            
        </ModalBody>
        <ModalFooter>
          <Button color="primary"  type="submit" onClick={toggle}>Login</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SinUpToAccount;