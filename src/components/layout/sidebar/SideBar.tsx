import { SearchIcon } from "../../icon/Icon";
import { ButtonWrapper } from "../navbar/Navbar.styles";


const SideBar: React.FC = () => {
    return (
        <div>
            <ButtonWrapper> < SearchIcon color="none"/> Scarch components..  </ButtonWrapper>
            <h3>Component</h3>
            <ul>
                <li>Navbar</li>
                <li>Hero</li>
                <li>Features</li>
                <li>CTA</li>
                <li>Footer</li>
            </ul>
        </div>
    )
};
export default SideBar;