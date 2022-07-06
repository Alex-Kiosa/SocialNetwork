import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {state} from './redux/state'
import { BrowserRouter } from 'react-router-dom';

export type DialogType = { id: string, name: string }
export type MessageType = { id: string, message: string }
export type PostType = { text: string, likes: number }
export type FundraisingType = { id: string, image: any /*need to fix*/, title: string, countPeoples: number }
export type StateType = {
    profilePage: { posts: Array<PostType> },
    dialogsPage: { dialogs: Array<DialogType>, messages: Array<MessageType> },
    fundraisingPage: { fundPosts: Array<FundraisingType> },
}

ReactDOM.render(
    <BrowserRouter>
        <App state={state}/>
    </BrowserRouter>,
    document.getElementById('root')
);