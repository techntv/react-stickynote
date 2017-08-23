import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';
import Draggable from 'react-draggable';

import jQuery from 'jquery';
global.jQuery = jQuery;
global.$ = jQuery;

let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(<Board count={30}/>, document.getElementById('react-container'));