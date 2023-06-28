
import React, { useState, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword , getAuth} from 'firebase/auth'
import { app } from '../../firebase'

const SignUp = () => {

    const auth = getAuth(app);
    const [login, steLogin] = useState()
const navigate = useNavigate()

    const EmailRef = useRef();
    const PasswordRef = useRef()
    const ConfirmPasswordRef = useRef();

    const loginSwappingHandler = () => {
        steLogin((prev) => !prev)
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        // alert('Submit Succeed')

        const enteredEmail = EmailRef.current.value;
        const password = PasswordRef.current.value;
        const enteredConfirmedPassword = ConfirmPasswordRef.current.value;
        console.log(password)
        if(login){
            signInWithEmailAndPassword( auth ,enteredEmail, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user.email)
              console.log(user.password)
              console.log('In login user')

              navigate('/Welcome')
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
            });
        }
        else{
            if(password === enteredConfirmedPassword){
alert('SignUp Successfully')
           
            createUserWithEmailAndPassword(auth, enteredEmail, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
            }
        }
       

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

              && <Form.Group className='mb-3' htmlFor='confirm-password' >
                    <Form.Label>Password </Form.Label>
                    <Form.Control type='cpnfirm-password' ref={ConfirmPasswordRef} placeholder='confirm Password' id='confirm-password' />
                </Form.Group>

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

export default SignUp
