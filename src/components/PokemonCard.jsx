import React from "react";

function PokemonCard(props) {
  return React.createElement(
    React.Fragment,
    null,
    props.pokemonList.map(function (pokemon) {
      return React.createElement(
        "figure",
        { key: pokemon.name },
        pokemon.imgSrc
          ? React.createElement("img", {
              src: pokemon.imgSrc,
              alt: pokemon.name,
            })
          : React.createElement("p", null, "???"),
        React.createElement("figcaption", null, pokemon.name)
      );
    })
  );
}

export default PokemonCard;
