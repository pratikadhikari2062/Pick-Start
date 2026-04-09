import styled from "styled-components";

export const NavContaine = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  border: 1px solid var(--border-color);
`;

export const HeadingTwo = styled.h2`
  background-color: var(--background-color);
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 70px;

  
`;
export const NavItem = styled.li`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Startbutton = styled.button`
  height: 30px;
  width: 100px;
  background-color: var(--primary-color);
  border-radius:5px;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const HamButton = styled.button`
  border: none;
  @media (min-width: 768px) {
    display: none;
  }
`;