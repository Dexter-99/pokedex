import React from "react";
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5"
};
const Pokemon = props => {
  const main_types = Object.keys(colors);
  const getType = types => {
    const poke_types = types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    return type;
  };
  const getMoves = moves => {
    moves = moves.filter((move, i) => {
      if (i <= 2) {
        return true;
      }
    });
    return moves;
  };
  return (
    <div
      class="card text-center"
      style={{ backgroundColor: colors[getType(props.item.types)] }}
    >
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${props.item.id}.png`}
        className="round-img p-1"
        style={{
          width: "125px",
          height: "125px",
          backgroundColor: "#ffffff",
          marginTop: "-70px"
        }}
      />
      <h2>{props.item.name[0].toUpperCase() + props.item.name.slice(1)}</h2>
      <p className="lead">Type: {getType(props.item.types)}</p>
      <p style={{ fontSize: "1.1rem", fontWeight: 700 }}>Moves:</p>
      <ul className="inline">
        {getMoves(props.item.moves).map(move => (
          <li style={{ fontSize: "0.90rem" }}>{move.move.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Pokemon;
