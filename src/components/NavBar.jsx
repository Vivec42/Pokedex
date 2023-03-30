function NavBar({ pokemonList, handleClick }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;
