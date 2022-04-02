import { useState } from "react";
import "./App.css";
import data from "./Quotes.json";

function App() {
    const randomPosition = (max) => {
        return Math.floor(Math.random() * max.length - 1);
    };

    // ? Initial State
    const [quote, setQuote] = useState(data.quotes[randomPosition(data.quotes)])

    const handlerChangeQuote = () => {
      setQuote(data.quotes[randomPosition(data.quotes)])
    }

    return (
        <div className="App">
            <header className="App-header">
              <h3>{quote.quote}</h3>
              <p>{quote.author}</p>
              <button onClick={handlerChangeQuote} >Next Quote</button>
            </header>
        </div>
    );
}

export default App;
