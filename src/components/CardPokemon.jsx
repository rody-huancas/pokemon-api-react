import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getColor } from "../helpers/colors";
import { TypePokemon } from "./TypePokemon";
import { getPokemon } from "../api/pokemon.api";

export const CardPokemon = ({ pokemon }) => {
  const { name, url } = pokemon;
  const [pokemonData, setPokemonData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemon(url);
        const data = response.data;
        setPokemonData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  const urlParts = url.split("/");
  const id = urlParts[urlParts.length - 2];

  if (!pokemonData) {
    return <div>Cargando...</div>;
  }
  // console.log(pokemonData.types);
  const frontDefault = pokemonData.sprites?.other?.dream_world?.front_default;
  const types = pokemonData.types.map((type) => type.type.name);

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <div
        className={`w-[300px] h-[120px] rounded-lg flex items-center justify-between gap-5 p-3 cursor-pointer hover:opacity-80 hover:scale-105 transition-all`}
        style={{ background: getColor(types[0]) }}
        onClick={handleClick}
      >
        <div>
          <span className="font-black">#{id}</span>
          <h3 className="text-2xl text-white capitalize font-bold">{name}</h3>
          <div className="flex items-center gap-2 mt-2">
            {types.map((type) => (
              <TypePokemon key={type} type={type} />
            ))}
          </div>
        </div>

        {frontDefault && (
          <img
            className="w-[120px] h-[130px] mb-10"
            src={frontDefault}
            alt={`Pokemon ${name}`}
          />
        )}
      </div>
    </>
  );
};
