import React from "react";

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

export default PokemonCard;

function PokemonCard() {
  return (
    <>
      {pokemonList.map((pokemon) => (
        <figure key={pokemon.name}>
          {pokemon.imgSrc ? (
            <img src={pokemon.imgSrc} alt={pokemon.name} />
          ) : (
            <p>???</p>
          )}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      ))}
    </>
  );
}
