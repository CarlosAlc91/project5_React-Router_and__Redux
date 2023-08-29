import { useState } from "react";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";
import { paginateData } from "../utils/pagination";
import Pagination from "../components/pokedex/Pagination";

const Pokedex = () => {
  /* custom hook */

  /* states */
  const [currentPage, setCurrentPage] = useState(1);
  const {
    name,
    types,
    pokemonName,
    pokemonType,
    pokemonsByName,
    setPokemonName,
    setPokemonType,
    handlerChange,
  } = usePokedex();

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currentPage
  );

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
            <option value="">All pokemons</option>
            {types.map((type) => (
              <option key={type.name} value={type.name} className="capitalize">
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <PokemonList pokemons={itemsInCurrentPage} />
      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};
export default Pokedex;
