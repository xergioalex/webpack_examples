import '../css/styles.css';
// import makeMessage from './make-message.js';
// import renderToDOM from './render-to-dom';
// import { firstMessage, delayedMessage } from './messages.js';
// import platziImg from '../images/platzi.png';
import data from './teachers.json';
// console.log(data);


import React from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers.js';

render(<Teachers data={data.teachers}/>, document.getElementById('container'))