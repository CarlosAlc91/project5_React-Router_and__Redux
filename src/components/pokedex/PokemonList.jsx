import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    /* padre de pokemonCard.jsx y se encarga de como se van a posicionar los elemtos hijos*/
    <section className="grid px-4 gap-4 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};
export default PokemonList;
