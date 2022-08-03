import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                updateTextForNewPost={store.updateTextForNewPost.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree()

store.subscribe(renderTree) // if state changed, call renderTree