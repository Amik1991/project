import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heder from './component/Heder/Heder'
import Navbar from './component/Navbar/Navbar'
import Profile from './component/Profile/Profile'

const App = () => {
  return (
    <div className="app-wrapper">
        <Heder/>
        <Navbar/>
        <Profile/>
    </div>
  );
}

export default App;
