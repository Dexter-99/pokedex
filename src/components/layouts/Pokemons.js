import React from "react";
import Pokemon from "./Pokemon";
const Pokemons = props => {
  return (
    <div className="container">
      <div className="grid-4">
        {props.items.map((pokemon, i) => (
          <Pokemon key={i} item={pokemon} />
        ))}
      </div>
    </div>
  );
};
export default Pokemons;
