import React, { useState, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { authAction } from '../../Store/authSlice'
import { useDispatch } from 'react-redux'

import './Login.css'

const LogIn = () => {
    // const auth = getAuth();
    const [login, setLogin] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const EmailRef = useRef();
    const PasswordRef = useRef()
    const ConfirmPasswordRef = useRef();

    const loginSwappingHandler = () => {
        setLogin((prev) => !prev)
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        // alert('Submit Succeed')

        const enteredEmail = EmailRef.current.value;
        const enteredPassword = PasswordRef.current.value;
        const enteredConfirmedPassword = ConfirmPasswordRef.current.value;

        let url;
        if (!login) {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVsYs-SdQxx0D2zHv_IY5QC7jHoz0m2dw";
        } else {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVsYs-SdQxx0D2zHv_IY5QC7jHoz0m2dw";
        }
        if (enteredPassword !== enteredConfirmedPassword) {
            return setMessage('Please enter correct password')
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    return response.json()

                } else {
                    return response.json().then((data) => {
                        let errorMessage = 'Authentication failed!';
                        throw new Error(errorMessage);
                    });
                }
            })
            .then((data) => {
                console.log(data)
                dispatch(authAction.logIn())
                localStorage.setItem('idToken', data.idToken)
                localStorage.setItem('Email', data.email)
                if (!login) {
                    navigate('/') 
                } else {
                    navigate('/Welcome')
                }
            })
            .catch((error) => {
                alert(error.message)
            });


    }
    return (
        <div className='login-main'>
            <Form onSubmit={SubmitHandler}>

                <Form.Group className='mb-3' htmlFor='email' >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter Your Email' id='email' ref={EmailRef} />
                </Form.Group>

                <Form.Group className='mb-3' htmlFor='password' >
                    <Form.Label>Password </Form.Label>
                    <Form.Control type='password' ref={PasswordRef} placeholder='Enter Your Password' id='password' />
                </Form.Group>

                <Form.Group className='mb-3' htmlFor='confirm-password' >
                    <Form.Label> confirm Password </Form.Label>
                    <Form.Control type='confirm-password' ref={ConfirmPasswordRef} placeholder='confirm Password' id='confirm-password' />
                </Form.Group>
                {!login && <p style={{ color: 'white' }}>{message}</p>}

                <Button variant="success" type='submit' >
                    {login ? 'LogIn' : 'SignUp'}
                </Button>
            </Form>

            <Button
                onClick={loginSwappingHandler}
                style={{
                    backgroundColor: "whitesmoke",
                    fontWeight: "bold",
                    marginTop: 20 + "px",
                    marginBottom: 20 + "px",
                    width: 40 + "%",
                }}
                variant=""
            >
                {login ? "Create Account Sign Up" : "Click Here to Log In"}
            </Button>
        </div>
    )
}

export default LogIn
