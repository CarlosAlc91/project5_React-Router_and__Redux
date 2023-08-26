import { useEffect, useState } from "react";
import { getPokemonByUrl } from "../../services/pokemons";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  /* handlers, functions */
  const joinPokemonTypes = (types = []) => {
    return types.slice(0, 2).join(" / ");
  };

  /* effect */
  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <article>
      <header>
        <div>
          <img src="" alt="" />
        </div>
      </header>
      <section>
        <h3>{pokemonInfo?.name}</h3>
        <h4>{joinPokemonTypes(pokemonInfo?.types)}</h4>
        <h5>Types</h5>
        <hr />
      </section>
    </article>
  );
};
export default PokemonCard;
