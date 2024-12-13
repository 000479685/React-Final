import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth, db} from '../firebaseConfig'
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";



const SignupPage = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const userNotesCollectionReference = collection(db, "userNotes");

    const [userNotesDetails, setUserNotesDetails] = useState({
        email: '',
        notes: {

        }
    })

    const handleSignup = async () =>
    {
        try
        {
            const {user} = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);                 
            await addDoc(userNotesCollectionReference, userNotesDetails)
            setTimeout(() => {
                navigate('/');
            }, 2000)          
        } 
        catch(error)
        {
            console.log(error.code)
        }
    }

    return (
        <Box display="flex" flexDirection="column" gap="12px" border="1px solid black" padding="40px" borderRadius="12px">
            <Typography variant="h3">Sign up</Typography>
            <TextField
                required
                id="email"
                label="Email"
                // defaultValue=""
                placeholder='Enter your email'
                type='email'
                value={credentials.email}
                onChange={(e) => {setCredentials({
                    ...credentials,
                    email: e.target.value
                })
                setUserNotesDetails({
                    ...userNotesDetails,
                    email: e.target.value
                })}
            }
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
            <Button onClick={handleSignup} variant="contained" color="secondary">Sign up</Button>        
            <Link to="/">Already have an account? Signin</Link>
        </Box>
    )
}

export default SignupPage

