// API URL
const url = 'https://talaikis.com/api/quotes/random/';

// Time loading
const timeLoading = 750;

// Selecting DOM Elements
const button = document.querySelector('#quote__generate');
const parent = document.getElementById('quote__display');
const tweet = document.getElementsByClassName('twitter-share-button')[0];
const spinner = document.getElementById('spinner-container');
let quote = document.createElement('span');
let author = document.createElement('p');
author.classList.add('italics');

// Loading effects
const showloading = () => {
	spinner.style.display = 'flex';
	spinner.style.opacity = '1';
}

const hideLoading = () => {
	setTimeout(() => {
		spinner.style.opacity = '0';
		spinner.style.display = 'none';
	}, timeLoading);
}

// Quote Generater
const quoteGenerate = () => {
	showloading();
	const data = fetch(url).then((request) => request.json()).
		then((data) => {		
			quote.innerHTML = data.quote;
			author.innerHTML = `- ${data.author}`;
			tweet.href=`https://twitter.com/intent/tweet?text=${data.quote}-${data.author}`;

			parent.appendChild(quote);
			parent.appendChild(author);
			randomColorGenerater();
			hideLoading();
	});
};

// Generate new quote on Click Event
button.addEventListener('click', quoteGenerate);
window.onload = quoteGenerate;

// Random background color
const randomNumber = no => Math.floor(Math.random() * no);

const randomColorGenerater = () => {
	const color = ['#D50000','#4A148C','#0D47A1','#009688','#E65100','#212121','#263238','#1B5E20','#01579B','#3F51B5','#AA00FF','#880E4F','#B71C1C'];
	document.body.style.background = color[randomNumber(color.length)];
}

hideLoading();
