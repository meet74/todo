import "./App.css";
import React from "react";
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/home'
import SignUp from './pages/auth/SignUp'
import LogIn from './pages/auth/LogIn'

function App() {

  return (
    <div>
      <Routes>
        <Route  path="/" element={<HomePage/>}/>
        <Route path="/auth/signup" element={<SignUp/>}/>
        <Route path="/auth/login" element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
