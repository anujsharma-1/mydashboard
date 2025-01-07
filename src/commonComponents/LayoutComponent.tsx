import { Outlet } from "react-router-dom";
import { Header } from "../HeaderModule/Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
