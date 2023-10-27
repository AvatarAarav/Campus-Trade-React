import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



import './App.css';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import AdPage from './Pages/AdPage/AdPage';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Admin from './Pages/Admin/Admin';
import UserProfile from './Pages/UserProfile/UserProfile';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
      <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Admin/>} />
          <Route path="/ad" element={<AdPage/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/admin" exact element={<Admin/>} />
          <Route path="/user" exact element={<UserProfile/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
        <Footer/>

      
        
        
      </div>
    </Router>
    </>
  )
}

export default App
