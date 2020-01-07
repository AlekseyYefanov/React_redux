import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';

import s from "./components/profile/profile.module.css";
function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    {/*<Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
