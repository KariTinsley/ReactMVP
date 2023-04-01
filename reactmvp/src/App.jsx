import React, { useState } from "react";
import './App.css';
import Pokemon from "./Pokemon";
import PokemonCard from "./PokemonCard";
import data from './Test';

const App = (props) => {
  const [monsters, setMonsters] = useState(data.results);


  return (
    <div className="App">
      <div>
        <select>Regions?</select>
      </div>
      <div className="Pokemon">
      Who's that pokemon?
      <Pokemon
     monsters={monsters}
      />

      </div>
    </div>
  );
}

export default App;
