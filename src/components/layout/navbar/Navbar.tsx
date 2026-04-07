import { Link } from "@tanstack/react-router";
import { Dropdown, EyeIcon } from "../../icon/Icon";
import {
  NavbarWapper,
  PreviewButton,
  ExportButton,
  ButtonWrapper,
} from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavbarWapper>
      <Link to = "/"><h1>Pick-Start </h1></Link>
      
      <ButtonWrapper>
        <Link to="/prewiew">
          <PreviewButton>
            {" "}
            <EyeIcon color="none" /> Preview
          </PreviewButton>
        </Link>
        <ExportButton>
          Export <Dropdown />{" "}
        </ExportButton>
      </ButtonWrapper>
    </NavbarWapper>
  );
};
export default Navbar;
