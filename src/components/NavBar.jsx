function NavBar({ currentPokemonIndex, setCurrentPokemonIndex, pokemonList }) {
  const handleClickPrev = () => {
    if (currentPokemonIndex > 0) {
      setCurrentPokemonIndex(currentPokemonIndex - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPokemonIndex < pokemonList.length - 1) {
      setCurrentPokemonIndex(currentPokemonIndex + 1);
    }
  };

  return (
    <>
      <button onClick={handleClickPrev} disabled={currentPokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleClickNext}
        disabled={currentPokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </>
  );
}

export default NavBar;
