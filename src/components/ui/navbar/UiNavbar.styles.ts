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
  background-color: var(--secondary-color);
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 70px;
`;
export const NavItem = styled.li``;

export const Startbutton = styled.button`
  height: 30px;
  width: 100px;
  background-color: var(--primary-color);
`;
