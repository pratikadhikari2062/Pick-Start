import { NavbarWapper, PreviewButton, ExportButton } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavbarWapper>
      <h1>Pick-Start </h1>
      <div>
        {" "}
        <PreviewButton>Preview</PreviewButton>
        <ExportButton>Export</ExportButton>
      </div>
    </NavbarWapper>
  );
};
export default Navbar;
