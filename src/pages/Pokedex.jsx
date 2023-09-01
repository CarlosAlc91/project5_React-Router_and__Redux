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
      <section className="px-5">
        <p className="flex justify-between">
          <span className="text-trainer font-inter font-bold">
            Welcome {name},{" "}
            <b className="text-black font-medium">
              here you'll find your favorite pokemon
            </b>
          </span>
        </p>
        <form>
          <section className="flex justify-between py-6 mx-auto">
            <div className="border py-2 w-80 shadow-lg">
              <input
                className="outline-none pl-2"
                value={pokemonName}
                onChange={handlerChange(setPokemonName)}
                placeholder="Search pokemon..."
                type="text"
              />
            </div>

            <select
              className="w-80 font-roboto font-light text-sm border shadow-lg outline-none pl-2"
              value={pokemonType}
              onChange={handlerChange(setPokemonType)}
            >
              <option value="">All pokemons</option>
              {types.map((type) => (
                <option
                  key={type.name}
                  value={type.name}
                  className="capitalize"
                >
                  {type.name}
                </option>
              ))}
            </select>
          </section>
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
