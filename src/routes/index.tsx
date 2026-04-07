import { createFileRoute } from "@tanstack/react-router";
import { styled } from "styled-components";

export const NavContaine = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
`;

export const HeadingTwo = styled.h2`
  background-color: var(--secondary-color);
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap:70px;
  `;

const NavItem = styled.li`
`;
const Startbutton = styled.button`
height:30px;
width:100px;
background-color: var(--primary-color);
`;

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <NavContaine>
      <HeadingTwo>Brand</HeadingTwo>
      <NavList>
        <NavItem>Home</NavItem>
      <NavItem>Feature</NavItem>
      <NavItem>Pricing</NavItem>
      <NavItem>contact</NavItem>
      </NavList>
      <Startbutton>Get Start</Startbutton>
      
    </NavContaine>
  );
}
