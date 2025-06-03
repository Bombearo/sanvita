"use client"

import {useState} from "react"
import NavItem from "./navItem";
import './navBar.css';
import Link from "next/link";
import Image from "next/image";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return ( <nav className="navbar">
        <div className="logo">
            <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={50} height={50}/>
            </Link>
        </div>
        <div className={`navItems ${menuOpen ? "open" : ""}`}>
            <NavItem name="Home"/>
            <NavItem name="About us" route="about"/>
            <NavItem name="Shop"/>
            <NavItem name="Products" dropdown={["options","quality"]} route="products"/>
            <NavItem name="Contact us" route="contact"/>
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