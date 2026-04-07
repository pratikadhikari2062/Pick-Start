import styled from "styled-components";

export const LeftSidebarContainer = styled.div`
  height: calc(100vh - 64px);
  width: 20%;
  position: sticky;
  top:64px;
  border-right: 1px solid var(--border-color);
  
`;

export const HeadingThree = styled.h3`
margin:10px;
font-weight:bold;
font-size:500;

`;

export const Unorderlist = styled.ul`
list-style-type:none;
margin:10px;
Display:grid;
row-gap:15px;

`;
export const OrderList = styled.li`
margin:10px;
`;

