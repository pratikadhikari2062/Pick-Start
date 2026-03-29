import { Dropdown, EyeIcon } from "../../icon/Icon";
import { NavbarWapper, PreviewButton, ExportButton } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavbarWapper>
      <h1>Pick-Start </h1>
      <div>
        {" "}
        <PreviewButton> <EyeIcon   color="none"/> Preview</PreviewButton>
        <ExportButton>Export <Dropdown /> </ExportButton>
      </div>
    </NavbarWapper>
  );
};
export default Navbar;


