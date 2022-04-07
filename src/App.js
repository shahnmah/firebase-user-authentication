import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { getAuth } from "firebase/auth";
import app from './firebase.init';
import './App.css';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleEmailBlur = e =>{
    setEmail(e.target.value)
  }
  const handlePasswordBlur = e =>{
    setPassword(e.target.value)
  }
  const handleButtonClick = () =>{
    console.log(email)
    console.log(password)
  }
  
  return (
    <div className="container p-5 w-50 mx-auto">
      <h2>Please Register Hare</h2>
      <Form className=''>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Already Registered" />
        </Form.Group>
        <Button onClick={handleButtonClick} variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default App;
