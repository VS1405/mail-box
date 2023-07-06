import React, { Fragment } from 'react'

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'
import { useDispatch} from 'react-redux';
import { authAction } from '../../Store/authSlice';
import { useNavigate } from 'react-router-dom';

const MainNavigation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loggedEmail = localStorage.getItem('Email')
  console.log(loggedEmail)

  const logoutHandler = () => {
    console.log('LogOut Successfully')
    dispatch(authAction.logOut())
    navigate('/')
  }


  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand >Mail Box</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={classes.container} >
            <Nav className={classes["me-auto"]}>
              <NavLink style={{ fontWeight: "bold", padding: 5 + "px"}} to='/Compose'>Compose</NavLink>
              <NavLink style={{ fontWeight: "bold", padding: 5 + "px" }} to='/InboxEmail' >Inbox</NavLink>
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
