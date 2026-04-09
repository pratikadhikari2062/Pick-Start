import styled from "styled-components";

export const NavbarWapper = styled.nav`
  height: 64px;
  width: 100%;
  position: sticky;
  top:0;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--border-color);
  align-items: center;
  background-color:#ffffff;
  z-index:1000;
`;
export const HeadingOne = styled.div`
color:green;
font-weight:800;
`
export const ButtonWrapper = styled.div`
display:flex;
align-items:center;
justyfy-content:center;

`   
export const PreviewButton = styled.button`
    
    padding:10px 30px;
    font-size:18px;
    font-weight-800;
    color:gray;
    margin:5px;
    border-radius: 6px;
    display:flex;
    
     
`;
export const ExportButton = styled.button`
    padding:10px 30px;
    font-size:18px;
    font-weight-800;
    color:gray;
    border-radius: 6px;
    display:flex;
    background-color:var(--background-color)
    

`;

