import React from 'react';

import './App.css';
import SearchQuote from "./SearchQuote";
import RandomQuote from "./RandomQuote";
function App() {
  return (
    <div className="App">
   <h1>Quotes</h1>   
  
  <RandomQuote/>
  <SearchQuote/>
    </div>
  );
}

export default App;
