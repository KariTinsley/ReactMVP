import React, { useState}  from "react";
import './App.css';
import Pokemon from './Pokemon';
import data from './Test';

function App() {
  const [Card, setCard] = useState(data.pokemon);
 


  return (
    <div className="App">
      <div>
        <select>Regions?</select>
      </div>
      <div>
        Grid of Pokemon
        <Pokemon/>
      
      </div>
    </div>
  );
}

export default App;
