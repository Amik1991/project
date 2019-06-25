import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heder from './component/Heder/Heder'
import Navbar from './component/Navbar/Navbar'
import Profile from './component/Profile/Profile'
import Dialogs from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./component/Settings/Settings";
import Music from "./component/Music/Music";
import News from "./component/News/News";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Heder/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialog' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/setting' component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
