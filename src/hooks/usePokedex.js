import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getAllPokemons, getAllTypes, getPokemonsByType } from "../services/pokemons"

/* logic separation from Pokedex.jsx component */
const usePokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonType, setPokemonType] = useState("")
  const [types, setTypes] = useState([])
  /* slice = estado global */
  const { name } = useSelector((store) => store.trainer)



  /* una sola funcin para manejar dos estados */
  const handlerChange = (setState) => (e) => {
    setState(e.target.value)
  }

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLocaleLowerCase())
  )

  /* con esta peticion podemos hacer el filtrado del tipo de pokemons y mostrar todos los pokemons */
  useEffect(() => {
    if (!pokemonType) {
      getAllPokemons()
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err))
    }
  }, [pokemonType])

  useEffect(() => {
    if (pokemonType) {
      //hacer lal peticion de pokemons por tipo
      getPokemonsByType(pokemonType)
        .then((data) => setPokemons(data))
    }
  }, [pokemonType])

  /* efecto de la funcion getAllTypes */
  useEffect(() => {
    getAllTypes()
      .then((types) => setTypes(types))
      .catch((err) => console.log(err))
  }, [])

  return {
    name,
    types,
    pokemonName,
    pokemonType,
    pokemonsByName,
    handlerChange,
    setPokemonName,
    setPokemonType,
  }
}
export default usePokedex