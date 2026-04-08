import { createFileRoute } from "@tanstack/react-router";
import { styled } from "styled-components";

export const NavContaine = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  border: 1px solid var(--border-color);
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

const LearnButton = styled.button`
  height: 30px;
  width: 100px;
  margin-left:30px;
  background-color: var(--secondary-color);
`;

const HeadingOne = styled.h1`
text-size:4px;
  margin-top:200px;
  text-align: center;
  font-size:var(--font-size-3xl)
`;
const Paragrah = styled.p`
  margin: 30px 0px;
`;
const MainHome = styled.div`
margin-top:2px;
  text-align: center;
`;

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
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
      <MainHome>
        <HeadingOne>Build Something Amazing</HeadingOne>
        <Paragrah>Create beautiful websites with our drag and drop builder</Paragrah>

        <Startbutton>Get Start</Startbutton>
        <LearnButton>Learn More</LearnButton>
      </MainHome>
    </div>
  );
}
