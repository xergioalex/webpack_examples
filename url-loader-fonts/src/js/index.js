import '../css/styles.css'
import { firstMessage, delayedMessage } from './message.js'
import platziImag from '../images/xergioalex.jpg'

document.write(firstMessage);
delayedMessage()

const img = document.createElement('img');
img.setAttribute('src', platziImag)
img.setAttribute('width', 50)
img.setAttribute('height', 50)
document.body.append(img);

console.log("Hello world! from webpack");