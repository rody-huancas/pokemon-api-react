import { useState, useEffect } from "react";
import { CardPokemon } from "../components";
import {
  getAllPokemons,
  getNextPokemons,
  getPreviousPokemons,
} from "../api/pokemon.api";
import { MdOutlineNavigateNext } from "react-icons/md";

export const HomePage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function loadPokemon() {
      const { data } = await getAllPokemons();
      setPokemon(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    }
    loadPokemon();
  }, []);

  const handleNext = async () => {
    if (next) {
      const { data } = await getNextPokemons(next);
      setPokemon(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    }
  };

  const handlePrevious = async () => {
    if (previous) {
      const { data } = await getPreviousPokemons(previous);
      setPokemon(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    }
  };

  const filteredPokemon = pokemon.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <input
        type="search"
        className="w-full py-3 px-1 rounded-xl text-center text-lg mb-10"
        placeholder="¿Qué Pokémon deseas buscar?"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />

      {filteredPokemon.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {filteredPokemon.map((item, index) => (
            <CardPokemon key={index} pokemon={item} id={item.id} />
          ))}
        </div>
      ) : (
        <p className="text-2xl text-center uppercase font-bold">
          No se encontró el pokemón{" "}
          <span className="text-pink-600">{searchValue}</span>.
        </p>
      )}

      <div className="flex justify-center items-center gap-5 mt-5">
        <button
          className="bg-pink-500 py-2 px-4 rounded-lg text-white font-medium uppercase text-lg cursor-pointer hover:opacity-80 transition-all rotate-180"
          onClick={handlePrevious}
          disabled={!previous}
        >
          <MdOutlineNavigateNext />
        </button>
        <button
          className="bg-blue-500 py-2 px-4 rounded-lg text-white font-medium uppercase text-lg cursor-pointer hover:opacity-80 transition-all"
          onClick={handleNext}
          disabled={!next}
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </>
  );
};
