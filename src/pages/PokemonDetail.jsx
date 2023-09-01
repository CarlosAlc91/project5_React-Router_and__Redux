import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBarStatsList from "../components/pokemonDetail/ProgressBarStatsList";
import { getPokemonById } from "../services/pokemons";
import { bgStylePokemonType } from "../shared/pokemon";

/* Pokemon's detailed information */
const PokemonDetail = () => {
  /* states */
  const [pokemonData, setPokemonData] = useState(null);
  console.log(pokemonData);
  const { pokemonId } = useParams();

  /* functions, handlers, */
  /* effects */
  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="flex justify-center items-center py-7">
      {/* va a tomar el valor que sea minimo o el 100% o hasta 400px */}
      <article className="w-full max-w-[600px] mx-auto  border-[4px] shadow-lg ">
        {/*  */}

        <header>
          <div
            className={`h-24 relative ${
              bgStylePokemonType[pokemonData?.types[0]]
            }`}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <img className="h-32" src={pokemonData?.image} alt="" />
            </div>
          </div>
        </header>

        <section className="text-center capitalize font-roboto pt-16 px-5">
          <span className="border border-b-line px-3 font-medium text-b-line text-2xl">
            #{pokemonData?.id}
          </span>
          <section className="flex items-center">
            <div className="w-full h-[1px] bg-h-line"></div>
            <p className="text-b-line text-3xl py-3 px-3">
              {pokemonData?.name}
            </p>
            <div className="w-full h-[1px] bg-h-line"></div>
          </section>
          <section className="flex justify-center gap-8 font-medium">
            <div>
              <p className="text-sm font-normal">weight</p>
              {pokemonData?.weight}
            </div>
            <div>
              <p className="text-sm font-normal">height</p>
              {pokemonData?.height}
            </div>
          </section>
        </section>

        <article className="flex justify-evenly gap-8">
          <section>
            <p>Type</p>
            <span className={`px-6 ${bgStylePokemonType[pokemonData?.types[0]]}`}>
              {pokemonData?.types[0]}
            </span>
          </section>
          <p>abilities</p>
          <section className="flex">
            <div>{pokemonData?.abilities[0].ability.name}</div>
            <div>{pokemonData?.abilities[1].ability.name}</div>
          </section>
        </article>

        <ProgressBarStatsList stats={pokemonData?.stats} />
      </article>
    </main>
  );
};
export default PokemonDetail;
