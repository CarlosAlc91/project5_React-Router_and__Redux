import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBarStatsList from "../components/pokemonDetail/ProgressBarStatsList";
import { getPokemonById } from "../services/pokemons";

/* Pokemon's detailed information */
const PokemonDetail = () => {
  /* states */
  const [pokemonData, setPokemonData] = useState(null);
  const { pokemonId } = useParams();

  /* functions, handlers, */
  /* effects */
  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <article>
        <header>
          <div>
            <img src={pokemonData?.image} alt="" />
          </div>
        </header>
        <span>#{pokemonData?.id}</span>
        <ProgressBarStatsList stats={pokemonData?.stats} />
      </article>
    </main>
  );
};
export default PokemonDetail;
