import { Outlet } from "react-router-dom";
import { Header } from "../HeaderModule/Header";
import { SidebarComponent } from "../sidebarComponent.ts/sidebar";
import layoutCSS from "./Layout.module.css";
export const Layout = () => {
  return (
    <div className={layoutCSS.outerLayout}>
      <SidebarComponent />
      <div className={layoutCSS.bodyLayoutCSS}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
