export const NavBar = () => {
  return (
    <>
      <div className="d flex flex-col gap-5 mb-20">
        <h1 className="font-bold text-4xl">Pokédex</h1>
        <input
          type="search"
          className="py-3 px-1 rounded-xl text-center text-lg"
          placeholder="¿Qué Pokemón deseas buscar?"
        />
      </div>
    </>
  );
};
