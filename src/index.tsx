import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './redux/state'
import {BrowserRouter} from "react-router-dom";
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

//serviceWorker.unregister();


