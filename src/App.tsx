import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Music} from "./components/Music/Music";
import {Friends} from "./components/Friends/Friends";
import {RootStateType, updateTextForNewPost} from "./redux/state";
import {Fundraising} from './components/Fundraising/Fundraising';

type AppPropsType = {
    addPost: () => void
    state: RootStateType
    updateTextForNewPost: (text: string) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={'app-wrap'}>
            <Header/>
            <NavBar/>
            <div className="app-wrap-content">
                <Routes>
                    <Route path="/profile" element={
                        <Profile
                            posts={props.state.profilePage.posts}
                            addPost={props.addPost}
                            textForNewPost={props.state.profilePage.textForNewPost}
                            updateTextForNewPost={props.updateTextForNewPost}
                        />}
                    />
                    <Route path="/dialogs" element={
                        <Dialogs
                            dialogs={props.state.dialogsPage.dialogs}
                            messages={props.state.dialogsPage.messages}
                        />}
                    />
                    <Route path="/fundraising"
                           element={
                               <Fundraising
                                   fundPosts={props.state.fundraisingPage.fundPosts}
                               />}/>
                    <Route path="/music" element={Music}/>
                    <Route path="/settings" element={Friends}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}
