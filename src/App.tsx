import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Feed} from "./components/Feed/Feed";
import {Music} from "./components/Music/Music";
import {Friends} from "./components/Friends/Friends";
import {StateType} from "./index";
import { Fundraising } from './components/Fundraising/Fundraising';

type AppPropsType = {
    state: StateType
}

export const App = ({state, ...props}: AppPropsType) => {
    return (
            <div className={'app-wrap'}>
                <Header/>
                <NavBar/>
                <div className="app-wrap-content">
                    <Route path="/profile" render={() => <Profile posts={state.profilePage.posts}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>}/>
                    <Route path="/fundraising" component={() => <Fundraising fundPosts={state.fundraisingPage.fundPosts}/>} />
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Friends}/>
                </div>
                <Footer/>
            </div>
    );
}
