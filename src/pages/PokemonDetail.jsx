import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBarStatsList from "../components/pokemonDetail/ProgressBarStatsList";
import { getPokemonById, joinPokemonTypes } from "../services/pokemons";
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
              <p className="text-xs font-normal">weight</p>
              {pokemonData?.weight}
            </div>
            <div>
              <p className="text-xs font-normal">height</p>
              {pokemonData?.height}
            </div>
          </section>
        </section>

        <article className="font-roboto py-4">
          <section className="flex  justify-evenly gap-10 text-black">
            <p>Type</p>
            <p>Abilities</p>
          </section>
          <section className="flex justify-evenly py-5">
            <div className="flex gap-4 items-center text-white capitalize">
              <span
                className={`${
                  bgStylePokemonType[pokemonData?.types[0]]
                } border-[1px] bg-[#85C9C5] px-8 py-[2px]`}
              >
                {pokemonData?.types[0]}
              </span>
              <span
                className={`${
                  bgStylePokemonType[pokemonData?.types[1]]
                } border-[1px] bg-[#85C9C5] px-8 py-[2px]`}
              >
                {pokemonData?.types[1]}
              </span>
            </div>
            <div className="flex justify-center items-center gap-5 capitalize">
              <span className="border-[1px] border-h-line px-6 py-[2px]">
                {pokemonData?.abilities[0].ability.name}{" "}
              </span>
              <span className="border-[1px] border-h-line px-6 py-[2px]">
                {pokemonData?.abilities[1].ability.name}
              </span>
            </div>
          </section>
        </article>

        <ProgressBarStatsList stats={pokemonData?.stats} />
      </article>
    </main>
  );
};
export default PokemonDetail;
