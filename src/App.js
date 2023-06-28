import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LogIn from './Components/Pages/Login';
import Welcome from './Components/Pages/Welcome';
function App() {
  return (

    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/Welcome'  element={<Welcome />}/>
        </Routes>
      </Router>
    </Fragment>

  );
}

export default App;
