import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBarStatsList from "../components/pokemonDetail/ProgressBarStatsList";
import { getPokemonById } from "../services/pokemons";
import { bgStylePokemonType } from "../shared/pokemon";

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
    <main className="flex justify-center items-center">
      {/* va a tomar el valor que sea minimo o el 100% o hasta 400px */}
      <article className="w-[min(100%,_400px)]">
        <header className={`h-24 ${bgStylePokemonType[pokemonData?.types[0]]}`}>
          <div className="flex justify-center h-32">
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
