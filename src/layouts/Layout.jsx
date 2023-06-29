import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Layout = () => {
  return (
    <>
      <div className="w-[1024px] mx-auto my-20">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
