import axios from "axios";
import { useEffect, useState } from "react";
import { getColor, getColorEtiqueta } from "../helpers/colors";

export const CardPokemon = ({ pokemon }) => {
  const { name, url } = pokemon;
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
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

  const frontDefault = pokemonData.sprites?.other?.dream_world?.front_default;
  const types = pokemonData.types.map((type) => type.type.name);

  return (
    <>
      <div
        className={`w-[300px] h-[120px] rounded-lg flex items-center justify-between p-3`}
        style={{ background: getColor(types[0]) }}
      >
        <div>
          <h1>#{id}</h1>
          <h3>{name}</h3>
          <div className="flex items-center gap-2 mt-2">
            {types.map((type, index) => (
              <p
                key={index}
                className={`rounded-lg px-3 py-1 text-white`}
                style={{ background: getColorEtiqueta(type) }}
              >
                {type}
              </p>
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
