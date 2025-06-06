"use client"

import {useState} from "react"
import NavItem from "./navItem";
import './navBar.css';
import Link from "next/link";
import Image from "next/image";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => setMenuOpen(false);
    return ( <nav className="navbar">
        <div className="logo">
            <Link href="/">
            <Image src="/images/hwato.jpeg" alt="Logo" width={50} height={50} style={{mixBlendMode: "multiply"}}/>
            </Link>
        </div>
        <div className={`nav-items ${menuOpen ? "open" : ""}`}>
            <NavItem name="Home" closeMenu={closeMenu}/>
            <NavItem name="About us" route="about" closeMenu={closeMenu}/>
            <NavItem name="Shop" closeMenu={closeMenu}/>
            <NavItem name="Products" dropdown={["options","quality"]} route="products" closeMenu={closeMenu}/>
            <NavItem name="Contact us" route="contact" closeMenu={closeMenu}/>
        </div>
        <div className="buttons">
            <button className="login">Login</button>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <button
                className="burger"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>
        </nav>);
}

export default NavBar;