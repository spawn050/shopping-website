import NavBarLogo from "./navBarLogo";
import NavBarCategories from "./navBarCategories";
import NavBarProfile from "./navBarProfile";

const NavBarContainer = () => {
    return (
        <div className="navbar-container">
            <NavBarLogo />
            <NavBarCategories />
            <div className="navbar-empty-container"></div>
            <NavBarProfile />
        </div>
    );
}

export default NavBarContainer;