import { useState } from "react";
import "./App.css";
import data from "./Quotes.json";

function App() {
    const randomPosition = (max) => {
        return Math.floor(Math.random() * max.length - 1);
    };

    const backColors = [
      '#29294a', '#6b3051', '#835aa1', '#379b9c', '#a5c8c6'
    ]

    // ? Initial State
    const [quote, setQuote] = useState(data.quotes[randomPosition(data.quotes)])
    const [currentColor, setCurrentColor] = useState(backColors[randomPosition(backColors)])

    const handlerChangeQuote = () => {
      setQuote(data.quotes[randomPosition(data.quotes)])
      setCurrentColor(backColors[randomPosition(backColors)])
    }



    return (
        <div className="App">
            <header className="App-header" style={{backgroundColor : currentColor}} >
              <h3>{quote.quote}</h3>
              <p>{quote.author}</p>
              <button onClick={handlerChangeQuote} >Next Quote</button>
            </header>
        </div>
    );
}

export default App;
