import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Feed} from "./components/Feed/Feed";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrap'}>
                <Header/>
                <NavBar/>
                <div className="app-wrap-content">
                        <Route path="/profile" component={Profile} />
                        <Route path="/dialogs" component={Dialogs} />
                        <Route path="/feed" component={Feed} />
                        <Route path="/music" component={Music} />
                        <Route path="/settings" component={Settings} />
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
