import { useState } from "react";
import PokemonCard from "./components/PokemonCard.jsx";
import "./App.css";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PokemonCard pokemonList={pokemonList} />
    </div>
  );
}

export default App;
