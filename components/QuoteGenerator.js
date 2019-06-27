import React, { useState, useEffect } from "react";
import axios from "axios";

const quotesURL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const colors = [
  "#ff1744",
  "#d50000",
  "#f50057",
  "#c51162",
  "#d500f9",
  "#aa00ff",
  "#651fff",
  "#6200ea",
  "#3d5afe",
  "#304ffe",
  "#2979ff",
  "#2962ff",
  "#00b0ff",
  "#0091ea",
  "#00e5ff",
  "#00b8d4",
  "#1de9b6",
  "#00bfa5",
  "#00e676",
  "#00c853",
  "#76ff03",
  "#64dd17",
  "#c6ff00",
  "#aeea00",
  "#ffea00",
  "#ffd600",
  "#ffc400",
  "#ffab00",
  "#ff9100",
  "#ff6d00",
  "#ff3d00",
  "#dd2c00"
];

function QuoteGenerator() {
  const [quotes, setQuotes] = useState([]);
  const [loading, changeStatus] = useState(true);
  const [currentQuote, setCurrentQuote] = useState({ quote: "", author: "" });

  useEffect(function fetchPosts() {
    axios(quotesURL)
      .then(result => {
        console.log(result.data.quotes);
        setQuotes(result.data.quotes);
        changeStatus(false);
      })
      .then(() => {
        console.log(quotes);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      newQuote();
    }
  }, [loading]);

  const newQuote = () => {
    const { quote, author } = quotes[randomIndex(quotes.length)];
    setCurrentQuote({ quote, author });
    changeBackgroudColor();
  };

  const changeBackgroudColor = () => {
    const color = colors[randomIndex(colors.length)];
    document.body.style.backgroundColor = color;
    document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
  };

  const randomIndex = index => {
    return Math.floor(Math.random() * index);
  };

  return (
    <main className="container">
      <div id="generator">
        <div id="info">
          <div id="quote">{currentQuote.quote}</div>
          <div id="author">{currentQuote.author}</div>
        </div>
        <div id="tools">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${currentQuote.quote} - ${
              currentQuote.author
            }`}
          >
            <img src="" alt="twitter the quote" />
          </a>
          <button onClick={newQuote}>New Quote</button>
        </div>
      </div>
    </main>
  );
}

export default QuoteGenerator;
