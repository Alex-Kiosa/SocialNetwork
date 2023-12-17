import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Music} from "./components/Music/Music";
import {Friends} from "./components/Friends/Friends";
import {Fundraising} from './components/Fundraising/Fundraising';
import './App.css';
import {StoreType} from "./redux/redux-store";

type AppPropsType = {
    store: StoreType
}

export const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()

    return (
        <div className={'app-wrap'}>
            <Header/>
            <NavBar sidebarElements={state.sidebar}/>
            <div className="app-wrap-content">
                <Routes>
                    <Route path="/profile" element={
                        <Profile
                            // store={props.store}
                        />}
                    />
                    <Route path="/dialogs" element={
                        <DialogsContainer store={props.store}/>}
                    />
                    <Route path="/music" element={ Music }/>
                    <Route path="/settings" element={Friends}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}
