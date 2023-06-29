import axios from "axios";

const pokemonApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

export const getAllPokemons = () => pokemonApi.get("/");
export const getPokemon = (url) => pokemonApi.get(url);
