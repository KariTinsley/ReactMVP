import React from "react";
import PokemonCard from './PokemonCard';

const Pokemon = (props) => {

    return (
      <div className='Pokemon'>Name of pokemon
      {props.results.map(()=>(
    
    ))}
      </div>

    );
  }

export default Pokemon;