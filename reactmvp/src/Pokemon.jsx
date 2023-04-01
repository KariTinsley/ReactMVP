import React from "react";


const Pokemon = (props) => {
    console.log('Iteration starts here', props.monsters)

    return (
        <div style={{ color: "blue" }}>
            {props.monsters.map((pokemon) => (
                <div>
                    <h1 key={pokemon.name}> {pokemon.name} </h1>
                    <h2>{pokemon.name}</h2>
                </div>
            ))}
        </div>
    );
}



export default Pokemon;