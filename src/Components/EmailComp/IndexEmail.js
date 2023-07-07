import React, { Fragment } from 'react';
import MainNavigation from '../Pages/MainNavigation';

const InboxEmail = () => {

  console.log("Inside inbox mails")
  const email = localStorage.getItem("Email")

  
  return (
    <Fragment>
      <div>
        <MainNavigation />
      </div>
    </Fragment>
  )
}

export default InboxEmail
