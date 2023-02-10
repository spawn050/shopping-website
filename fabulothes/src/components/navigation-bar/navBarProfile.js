import NavBarProfileIcon from "./navBarProfileIcon";
import NavBarWishlistIcon from "./navBarWishlistIcon";
import NavBarBagIcon from "./navBarBagIcon";

const NavBarProfile = () => {
    return (
        <div className="navbar-profile-container">
            <NavBarProfileIcon />
            <NavBarWishlistIcon />
            <NavBarBagIcon />
        </div>
    );
}

export default NavBarProfile;