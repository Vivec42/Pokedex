import { useState } from "react";
import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/NavBar.jsx";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentPokemonIndex(index);
  };
  const currentPokemon = pokemonList[currentPokemonIndex];
  return (
    <div className="App">
      <NavBar pokemonList={pokemonList} handleClick={handleClick} />
      <PokemonCard pokemon={currentPokemon} />
    </div>
  );
}

export default App;
