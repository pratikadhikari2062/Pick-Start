import { SideBarWapper } from "./sidebar.styles";


const SideBar: React.FC = () => {
    return (
        <SideBarWapper>
            <button>navbar</button>
            <button>Hero</button>
            <button>Feature</button>
            <button>CTA</button>
            <button>Footer</button>
            <h1></h1>
        </SideBarWapper>
    )
};
export default SideBar;