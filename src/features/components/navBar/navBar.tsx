import NavItem from "./navItem";
import './navBar.css';
import Link from "next/link";

function NavBar() {
    return ( <nav className="navbar">
        <div className="logo">
            <Link href="/">
            <img src="/logo.svg" alt="Logo" />
            </Link>
        </div>
        <div className="navItems">
            <NavItem>Home</NavItem>
            <NavItem>About us</NavItem>
            <NavItem>Contact us</NavItem>
            <NavItem>Products</NavItem>
            <NavItem>Learn</NavItem>
        </div>
        <div className="buttons">
            <button className="login">Login</button>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
            
        </nav>);
}

export default NavBar;