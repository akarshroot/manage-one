import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import GuardedRoute from './services/GuardedRoute';
// import Home from './pages/Home';
// import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import CreateOrg from './pages/CreateOrg';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = React.useState(null);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2000));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      if (true) {
        setLoading(!isLoading);
      }
    });
  }, []);


  return isLoading !== true ? (
      <Router>
        {/* <AuthProvider> */}
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" exact element={<Home/>} /> */}
          {/* <Route path="/login" exact element={<Login/>} /> */}
          <Route exact path='/dashboard' element={<GuardedRoute/>}>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
          </Route>
          {/* <Route exact path='/createorg' element={<GuardedRoute/>}>
            <Route exact path='/createorg' element={<CreateOrg/>}/>
          </Route> */}
          {/* <Route element={NotFound}></Route> */}
        </Routes>
        {/* <Footer /> */}
        {/* </AuthProvider> */}
      </Router>
  )
    :
    <div className="loader-container">
      Loading...
    </div>

}

export default App;