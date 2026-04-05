import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/layout/navbar/Navbar";
import SideBar from "../components/layout/sidebar/LeftSideBar";

const RootLayout = () => (
  <>
    <Navbar />
    <SideBar/>
  {/*   <Outlet /> */}
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
