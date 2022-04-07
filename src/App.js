import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './firebase.init';
import './App.css';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)

  const handleEmailBlur = e =>{
    setEmail(e.target.value)
  }
  const handlePasswordBlur = e =>{
    setPassword(e.target.value)
  }
  const handleCheckBox = e =>{
    setChecked(e.target.checked)
  }

  const handleButtonClick = () =>{
   createUserWithEmailAndPassword(auth, email, password)
   .then(result =>{
     const user = result.user;
     console.log(user)
   })
   .catch(error =>{
     console.log(error.message)
   })
  }
  
  return (
    <div className="container p-5 w-50 mx-auto">
      <h2>Please {checked ? 'Login' :'Register'} Hare</h2>
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
          <Form.Check onChange={handleCheckBox} type="checkbox" label="Already Registered" />
        </Form.Group>
        <Button onClick={handleButtonClick} variant="primary" type="submit">
          {checked ? 'Login' : 'Register'}
        </Button>
      </Form>
    </div>
  );
}

export default App;
