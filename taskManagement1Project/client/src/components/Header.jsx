import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiAdminFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import { Message} from 'rsuite';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Backend_Url from '../config/BackendUrl';
import axios from "axios";
const Header=()=>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const[adminid, setAdminid]=useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
     

      try {
        let api=`${Backend_Url}admin/adminlogin`;
        const response = await axios.post(api, {adminid:adminid, password:password});
        alert(response.data.msg);
        console.log(response);
      } catch (error) {
        alert(error.response.data.msg);
        
        console.log(error);
        
      }


     setShow(false);

  }
    return(
      <>
    
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Task Management System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to href="home">Home</Nav.Link>
            
          </Nav>
          <FaCircleUser className='topIcons' onClick={()=>{navigate("/userlogin")}}/>

          <RiAdminFill className='topIcons'onClick={handleShow}/>
      

        </Container>
       
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>




        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter ID</Form.Label>
        <Form.Control type="text"  
        value={adminid} onChange={(e)=>{setAdminid(e.target.value)}}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  
        value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>




        </Modal.Body>

      </Modal>
      
      </>
    )
  }
  export default Header;