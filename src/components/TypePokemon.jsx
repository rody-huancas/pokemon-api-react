import { getColorEtiqueta } from "../helpers/colors";

export const TypePokemon = ({ type }) => {
  return (
    <>
      <p
        key={type}
        className={`rounded-lg px-3 py-1 text-white`}
        style={{ background: getColorEtiqueta(type) }}
      >
        {type}
      </p>
    </>
  );
};
