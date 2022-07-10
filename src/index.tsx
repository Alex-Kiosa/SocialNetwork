import React from 'react';
import './index.css';
import {addPost, state, subscribe, updateTextForNewPost} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateTextForNewPost={updateTextForNewPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree()

subscribe(renderTree)