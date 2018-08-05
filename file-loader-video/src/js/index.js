import '../css/styles.css'
import { firstMessage, delayedMessage } from './message.js'
import testImg from '../images/xergioalex.jpg'
import testvideo from '../videos/video.ogg'


document.write(firstMessage);
delayedMessage()

const img = document.createElement('img');
img.setAttribute('src', testImg)
img.setAttribute('width', 50)
img.setAttribute('height', 50)
document.body.append(img);

const video = document.createElement('video');
video.setAttribute('src', testvideo)
video.setAttribute('width', 480)
video.setAttribute('autoplay', true)
video.setAttribute('controls', true)
document.body.append(video);

console.log("Hello world! from webpack");