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
import '../css/main.less';

const $button = document.getElementById('dynamic-import')

$button.addEventListener('click', async () => {
  const { default: alertModule } = await import('./alert.js')
  alertModule();
})


render(<Teachers data={data.teachers}/>, document.getElementById('container'))

// data.teachers.forEach((teacher) => {
//   const element = document.createElement('li');
//   element.textContent = teacher.name;
//   renderToDOM(element);
//   // document.body.append
//   // console.log(teacher)
// })

// const img = document.createElement('img')
// img.setAttribute('src', platziImg);
// img.setAttribute('width', 50);
// img.setAttribute('height', 50);
// document.body.append(img);

// renderToDOM(makeMessage(firstMessage));
// delayedMessage();
