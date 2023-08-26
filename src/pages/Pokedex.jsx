import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllPokemons } from "../services/pokemons";
import PokemonList from "../components/pokedex/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  /* slice = estado global */
  const { name } = useSelector((store) => store.trainer);

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
            <input placeholder="Search pokemon..." type="text" />
            <button>Search</button>
          </div>

          <select>
            <option value="">All pokemos</option>
          </select>
        </form>
      </section>

      <PokemonList pokemons={pokemons} />
    </main>
  );
};
export default Pokedex;
