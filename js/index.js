// API URL
const url = 'https://talaikis.com/api/quotes/random/';

const button = document.querySelector('#quote__generate');


button.addEventListener('click', () => {
	const data = fetch(url).then((request) => request.json()).then((data) => {
			const quote = data.quote;
			const author = data.author;
			
			// console.log(quote,author);
		});
});
