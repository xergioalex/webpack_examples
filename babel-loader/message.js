import renderToDOM from './render-to-dom.js';
import makeMessage from './make-message.js';

const waitTime = new Promise((success, error) => {
	setTimeout(() => {
		success('Has been passed 3 seconds')
	}, 3000)
});

module.exports = {
	firstMessage: 'Hello world! from webpack module',
	delayedMessage: async () => {
		const message = await waitTime;
		console.log(message);
		// const element = document.createElement('p')
		// element.textContent = message;
		renderToDOM(makeMessage(message));
	}
}