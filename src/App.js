import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LogIn from './Components/Pages/Login';
// import Welcome from './Components/Pages/Welcome';
import ComposeEmails from './Components/EmailComp/ComposeEmails';
import MainNavigation from './Components/Pages/MainNavigation';
import InboxEmail from './Components/EmailComp/IndexEmail';
import SendEmail from './Components/EmailComp/SendEmail';

function App() {
  
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<LogIn />} exact/>
          <Route path='/Welcome'  element={<MainNavigation />}/>
          <Route path='/Compose' element={<ComposeEmails />} />
          <Route path='/InboxEmail' element={<InboxEmail />} />
          <Route path='/SentEmail' element={<SendEmail />} />
        </Routes>
      </Router>
    </Fragment>

  );
}

export default App;
