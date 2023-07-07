import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getPokemon } from "../api/pokemon.api";
import { getColor } from "../helpers/colors";
import { TypePokemon } from "../components";

export const DetailPage = () => {
  const { id } = useParams(); // Obtener el ID del Pokémon de los parámetros de la URL
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemon(id);
        const data = response.data;
        setPokemonData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!pokemonData) {
    return <div>Cargando...</div>;
  }

  const { name, types, sprites } = pokemonData;
  const frontDefault = sprites?.other?.dream_world?.front_default;
  const type = types.map((type) => type.type.name);
  return (
    <>
      <div
        className="w-full h-screen flex flex-col items-center pt-28"
        style={{ background: getColor(type[0]) }}
      >
        <Link
          to={"/"}
          className="px-10 py-3 bg-pink-600 text-white rounded-md font-bold uppercase mb-10 hover:bg-pink-700 transition-all "
        >
          Regresar
        </Link>
        <div className="flex flex-col justify-center md:flex-row items-center gap-20 mt-10">
          <div className="flex flex-col gap-5">
            <span className="font-bold text-2xl">#{id}</span>
            <h2 className="font-extrabold text-5xl md:text-7xl uppercase">
              {name}
            </h2>

            <div className="flex gap-4">
              {types.map((type, index) => (
                <TypePokemon key={index} type={type.type.name} />
              ))}
            </div>
          </div>
          <img
            className="hover:scale-125 transition-all"
            src={frontDefault}
            alt={`Pokemon ${name}`}
          />
        </div>
      </div>
    </>
  );
};
