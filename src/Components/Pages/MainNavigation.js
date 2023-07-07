import React, { Fragment } from 'react'

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'
import { useDispatch, useSelector} from 'react-redux';
import { authAction } from '../../Store/authSlice';
import { useNavigate } from 'react-router-dom';

const MainNavigation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const unReadMessage = useSelector(state=>state.mail.unReadMessage)
  const isLoggedIn =useSelector(state=>state.auth.isLoggedIn)

  
  const logoutHandler = () => {
    // console.log('LogOut Successfully')
    dispatch(authAction.logOut())
    navigate('/')
  }

  const loggedEmail = localStorage.getItem('Email')
  // console.log(loggedEmail)

  let intervalId =setInterval(()=>{
    if(isLoggedIn){
      const loggedEmail = localStorage.getItem('email');
      const emailUrl = loggedEmail
      if(true){
        clearInterval(intervalId)
      }
    }
  } , 20000)

  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand >Mail Box</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={classes.container} >
            <Nav className={classes["me-auto"]}>
              <NavLink style={{ fontWeight: "bold", padding: 5 + "px"}} to='/Compose'>Compose</NavLink>
              <NavLink style={{ fontWeight: "bold", padding: 5 + "px" }} to='/InboxEmail' >Inbox {unReadMessage}</NavLink>
              <NavLink style={{ fontWeight: "bold", padding: 5 + "px" }} to='/SentEmail' >Sent</NavLink>
            </Nav>
            <Button onClick={logoutHandler} className='float-right mr-3'>Logout</Button>
          </Navbar.Collapse>
            <div className={classes.email}>{loggedEmail}</div>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default MainNavigation
