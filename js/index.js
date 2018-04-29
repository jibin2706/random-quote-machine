// API URL
const url = 'https://talaikis.com/api/quotes/random/';

// Selecting DOM Elements
const button = document.querySelector('#quote__generate');
const parent = document.getElementById('quote__display');
let quote = document.createElement('p');
let author = document.createElement('p');

// Generate new quote on Click Event
button.addEventListener('click', () => {
	const data = fetch(url).then((request) => request.json()).then((data) => {
			
			quote.innerHTML = data.quote;
			author.innerHTML = `- ${data.author}`;

			parent.appendChild(quote);
			parent.appendChild(author);
		});
});
