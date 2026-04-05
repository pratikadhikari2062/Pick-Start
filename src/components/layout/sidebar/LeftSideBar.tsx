import { HeadingThree, List, Unorderlist } from "./LeftSidebar.styles";

const LeftSideBar: React.FC = () => {
  return (
    <div>
      <HeadingThree>Component</HeadingThree>

      <Unorderlist>
        <List>Navbar</List>
        <List>Hero</List>
        <List>Features</List>
        <List>CTA</List>
        <List>Footer</List>
      </Unorderlist>
    </div>
  );
};
export default LeftSideBar;
