import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";

/* Pokemon's detailed information */
const PokemonDetail = () => {
  /* states */
  const { pokemonId } = useParams();

  /* functions, handlers, */
  /* effects */
  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return <main>PokemonDetail</main>;
};
export default PokemonDetail;
