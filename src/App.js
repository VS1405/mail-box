import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LogIn from './Components/Pages/Login';
import Welcome from './Components/Pages/Welcome';
import ComposeEmails from './Components/EmailComp/ComposeEmails';
function App() {
  return (

    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/Welcome'  element={<Welcome />}/>
          <Route path='/EmailCreater' element={<ComposeEmails />} />
        </Routes>
      </Router>
    </Fragment>

  );
}

export default App;
