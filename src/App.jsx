import { useState } from "react";
import PokemonCard from "./components/PokemonCard.jsx";
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
  const pokemonListLength = pokemonList.length;

  const handleClickPrev = () => {
    if (currentPokemonIndex > 0) {
      setCurrentPokemonIndex(currentPokemonIndex - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPokemonIndex < pokemonListLength - 1) {
      setCurrentPokemonIndex(currentPokemonIndex + 1);
    }
  };

  const currentPokemon = pokemonList[currentPokemonIndex];

  return (
    <div className="App">
      <PokemonCard pokemon={currentPokemon} />
      <button onClick={handleClickPrev} disabled={currentPokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleClickNext}
        disabled={currentPokemonIndex === pokemonListLength - 1}
      >
        Suivant
      </button>
    </div>
  );
}

export default App;
