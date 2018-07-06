import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router
} from 'react-router-dom';
import './index.css';
import App from './App';
// import axios from 'axios';
//import registerServiceWorker from './registerServiceWorker';
//import {Router, Route} from 'react-router-dom';

ReactDOM.render(
    <Router>    
        <App />
    </Router>
, document.getElementById('root'));

