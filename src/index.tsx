import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {StoreContext} from "./store-context";

const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App store={store}/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree()

store.subscribe(renderTree) // pattern observer