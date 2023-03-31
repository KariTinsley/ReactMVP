import React from "react";


const PokemonCard = (props) => {

    return (
      <div className='PokemonCards' data-testid="url">{props.name}</div>

    );
  }

export default PokemonCard;