import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Square from './Square';
import Board from "./Board";
//import Board2 from "./Board2";

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Square/>, document.getElementById('square'));
ReactDOM.render(<Board/>, document.getElementById('board'));
//ReactDOM.render(<Board2/>, document.getElementById('board2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
