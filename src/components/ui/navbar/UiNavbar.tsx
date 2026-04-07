import { HeadingTwo, NavContaine } from "../../../routes";
import { NavItem, NavList, Startbutton } from "./UiNavbar.styles";

function UiNavbar() {
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
export default UiNavbar;