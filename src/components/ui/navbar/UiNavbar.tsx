import { HeadingTwo, NavContaine } from "../../../routes";
import { HamBurgerIcon } from "../../icon/Icon";
import { NavItem, NavList, Startbutton, HamButton } from "./UiNavbar.styles";

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
            <HamButton><HamBurgerIcon/></HamButton>
      
        </NavContaine>
    );
}
export default UiNavbar;