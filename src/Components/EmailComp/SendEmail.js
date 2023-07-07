import React, { Fragment, useEffect } from 'react';
import MainNavigation from '../Pages/MainNavigation';
import EmailList from '../SendData/EmailList';
import { useSelector } from 'react-redux';

const SendEmail = () => {

  const mailData = useSelector(state => state.mail.mailData);
  const mails = useSelector(state => state.mail);
  console.log('In Send Mail')
  console.log(mails)

  useEffect(() => {
    fetch("https://mail-box-e9271-default-rtdb.firebaseio.com/mails.json", {
      method: "POST",
      body: JSON.stringify(mails)
    })
  }, [mails])


  const emails = [
    { 'To': '123@gmail.com', 'subject': 'Hello mam', 'message': 'Message Form customer' },
    { 'To': '123@gmail.com', 'subject': 'Hello mam', 'message': 'Message Form customer' },
    { 'To': '123@gmail.com', 'subject': 'Hello mam', 'message': 'Message Form customer' },
    { 'To': '123@gmail.com', 'subject': 'Hello mam', 'message': 'Message Form customer' },
    { 'To': '123@gmail.com', 'subject': 'Hello mam', 'message': 'Message Form customer' }
  ]

  return (
    <Fragment>
      <div>
        <MainNavigation />
      </div>
      <div style={{ padding: '5px' }}>
        {mailData.map(email => (
          <EmailList
            id={email.id}
            To={email.To}
            subject={email.subject}
            message={email.message}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default SendEmail;
