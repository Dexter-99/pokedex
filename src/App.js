import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./ultra-ball.png";
import Pokemons from "./components/layouts/Pokemons";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    async function getPokemon() {
      let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await fetch(url);
      const data = await res.json();
      setPokemons([...pokemons, data]);
      if (id !== 150) {
        setId(id + 1);
      }
    }
    getPokemon();
  }, [id]);

  return (
    <div className="App">
      <h1 className="large text-center my-1" style={{ color: "#ffffff" }}>
        <img
          src={Logo}
          className="mx-1"
          style={{ width: "40px", height: "40px" }}
        />
        Pokedex
      </h1>
      <Pokemons items={pokemons} />
    </div>
  );
}

export default App;
