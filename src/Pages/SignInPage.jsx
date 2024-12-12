import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

const SignInPage = () => {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();
  const [_currentUser, setCurrentUser] = useLocalStorage('current_user', null);


  const handleSignin = async () => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);        
        setCurrentUser(user);
        setTimeout(() => {
            navigate('/home');
        }, 2000);

    } catch (error) {
        console.log(error)
    }
  }

  return (
    <Box display="flex" flexDirection="column" gap="12px" border="1px solid black" padding="40px" borderRadius="12px">
        <Typography variant="h3">Sign in</Typography>
         <TextField
          required
          id="email"
          label="Email"
          // defaultValue=""
          placeholder='Enter your email'
          type='email'
          value={credentials.email}
          onChange={(e) => setCredentials({
            ...credentials,
            email: e.target.value
          })}
        />
         <TextField
          required
          id="password"
          label="Password"
          // defaultValue=""
          placeholder='Enter your Password'
          type='password'
          value={credentials.password}
          onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value
          })}
        />
        <Button onClick={handleSignin} variant="contained" color="secondary">Signin</Button>        
        <Link to="/signup">Dont have an account? Signup</Link>
    </Box>
  )
}

export default SignInPage