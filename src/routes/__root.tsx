import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/layout/navbar/Navbar";
import LeftSideBar from "../components/layout/sidebar/LeftSideBar";
import RightSidebar from "../components/layout/sidebar/RightSidebar";



const RootLayout = () => (
  <>
    <Navbar />
    <LeftSideBar />
    <RightSidebar/>
     <Outlet /> 
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
