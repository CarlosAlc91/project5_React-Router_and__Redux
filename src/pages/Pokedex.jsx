import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";

const Pokedex = () => {
  /* custom hook */
  const {
    name,
    pokemonName,
    pokemonType,
    pokemonsByName,
    setPokemonName,
    setPokemonType,
    handlerChange,
  } = usePokedex();

  return (
    <main>
      <section>
        <p>
          <span>Welcome {name}</span>
        </p>
        <form>
          <div>
            <input
              value={pokemonName}
              onChange={handlerChange(setPokemonName)}
              placeholder="Search pokemon..."
              type="text"
            />
          </div>

          <select value={pokemonType} onChange={handlerChange(setPokemonType)}>
            <option value="">All pokemos</option>
            <option value="rock">Rock</option>
          </select>
        </form>
      </section>

      <PokemonList pokemons={pokemonsByName} />
    </main>
  );
};
export default Pokedex;
