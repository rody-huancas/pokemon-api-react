import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

export const Layout = () => {
  return (
    <>
      <div className="lg:w-[1024px] mx-auto my-20 px-5 lg:px-0">
        <NavBar />
        <main className="flex flex-col items-center">
          <Outlet />
        </main>
      </div>
    </>
  );
};
