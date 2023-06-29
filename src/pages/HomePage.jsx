import { useState, useEffect } from "react";
import { CardPokemon } from "../components/CardPokemon";
import { getAllPokemons } from "../api/pokemon.api";

export const HomePage = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function loadPokemon() {
      const { data } = await getAllPokemons();
      // console.log(data);
      setPokemon(data.results);
    }
    loadPokemon();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 place-items-center gap-y-10">
        {pokemon.map((item, index) => (
          <CardPokemon key={index} pokemon={item} id={item.id} />
        ))}
      </div>
    </>
  );
};
