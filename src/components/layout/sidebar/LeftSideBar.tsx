import { HeadingThree, OrderList, Unorderlist,LeftSidebarContainer } from "./LeftSidebar.styles";

const LeftSideBar: React.FC = () => {
  return (
    <LeftSidebarContainer>
      <HeadingThree>Component</HeadingThree>

      <Unorderlist>
        <OrderList>Navbar</OrderList>
        <OrderList>Hero</OrderList>
        <OrderList>Features</OrderList>
        <OrderList>CTA</OrderList>
        <OrderList>Footer</OrderList>
      </Unorderlist>
    </LeftSidebarContainer>
  );
};
export default LeftSideBar;
