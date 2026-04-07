import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/layout/navbar/Navbar";
import LeftSideBar from "../components/layout/sidebar/LeftSideBar";
import RightSidebar from "../components/layout/sidebar/RightSidebar";
import styled from "styled-components";
import React from "react";

const Maincontent = styled.div`
  height: 100vh;
  width: 100%;
  position:relative;
  display: flex;

`;
export const Content = styled.div`
  height: calc(100vh - 64px);
  width: 60%;
  top:64px;
`;

const RootLayout = () => (
  <React.Fragment>
    <Navbar />
    <Maincontent>
      <LeftSideBar />
      <Content>
        <Outlet />
      </Content>
      <RightSidebar />
    </Maincontent>
    <TanStackRouterDevtools />
  </React.Fragment>
);
export const Route = createRootRoute({ component: RootLayout });
