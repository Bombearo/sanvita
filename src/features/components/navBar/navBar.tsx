import NavItem from "./navItem";
import './navBar.css';
import Link from "next/link";
import Image from "next/image";

function NavBar() {
    return ( <nav className="navbar">
        <div className="logo">
            <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={50} height={50}/>
            </Link>
        </div>
        <div className="navItems">
            <NavItem>Home</NavItem>
            <NavItem>About us</NavItem>
            <NavItem>Shop</NavItem>
            <NavItem>Products</NavItem>
            <NavItem>Learn</NavItem>
            <NavItem>Contact us</NavItem>
        </div>
        <div className="buttons">
            <button className="login">Login</button>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
            
        </nav>);
}

export default NavBar;