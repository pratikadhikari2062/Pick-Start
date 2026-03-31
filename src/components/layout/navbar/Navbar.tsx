import { Dropdown, EyeIcon } from "../../icon/Icon";
import { NavbarWapper, PreviewButton, ExportButton, ButtonWrapper } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavbarWapper>
      <h1>Pick-Start </h1>
      <ButtonWrapper>
        {" "}
        <PreviewButton> <EyeIcon   color="none"/> Preview</PreviewButton>
        <ExportButton>Export <Dropdown /> </ExportButton>
      </ButtonWrapper>
    </NavbarWapper>
  );
};
export default Navbar;