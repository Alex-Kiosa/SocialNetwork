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
import {Settings} from "./components/Settings/Settings";
import {DialogType, MessageType, PostType} from "./index";

type AppPropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    posts: Array<PostType>,
}

export const App = ({dialogs, messages, posts, ...props}: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className={'app-wrap'}>
                <Header/>
                <NavBar/>
                <div className="app-wrap-content">
                    <Route path="/profile" render={() => <Profile posts={posts}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                    <Route path="/feed" component={Feed}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}
