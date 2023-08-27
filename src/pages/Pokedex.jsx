import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllPokemons } from "../services/pokemons";
import PokemonList from "../components/pokedex/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  /* slice = estado global */
  const { name } = useSelector((store) => store.trainer);

  /* const handlerChangeInput = (e) => {
    setPokemonName(e.target.value);
  };

  const handlerChangeSelect = (e) => {
    setPokemonType(e.target.value);
  }; */

  /* una sola funcin para manejar dos estados */
  const handlerChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLocaleLowerCase())
  );

  useEffect(() => {
    getAllPokemons()
      .then((data) => setPokemons(data))
      .catch((err) => console.log(err));
  }, []);
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
