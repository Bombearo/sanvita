"use client"

import {useState, useEffect} from "react"
import Link from "next/link";
import "./navItem.css";

interface NavItemProps {
    name: string,
    dropdown?: string[],
    route?:string
}

const createDropdown = (dropdown: string[], parentRoute: string) => (
    <div className="dropdown-menu">
        {dropdown.map((item, index) => (
            <Link key={index} href={`/${parentRoute}/${item.toLowerCase()}`} className="dropdown-item">
                {item}
            </Link>
        ))}
    </div>
);

function useIsMobile(breakpoint = 1000){
    const [isMobile, setIsMobile] = useState<boolean|null>(null);

    useEffect(() =>{
        const check = () => setIsMobile(window.innerWidth < breakpoint);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [breakpoint])
    return isMobile;
}


function NavItem({ name, dropdown, route }: NavItemProps) {
    const [open, setOpen] = useState(false);
    const isMobile = useIsMobile();

    const navRoute = route || name.toLowerCase();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleToggle = () => setOpen((prev) => !prev);
    const nav_item = () => {
        // Avoid rendering until isMobile is determined on client
        if (isMobile === null) return null;
        return (
            <div
                className={`nav-item ${open ? "nav-active" : ""}`}
                onMouseEnter={!isMobile && dropdown ? handleOpen : undefined}
                onMouseLeave={!isMobile && dropdown ? handleClose : undefined}
                onClick={isMobile && dropdown ? handleToggle : undefined}
            >
                <div className="nav-link-container">
                    <Link href={navRoute === "home" ? "/" : `/${navRoute}`}>
                        {name}
                    </Link>
                    {dropdown && dropdown.length > 0 && (
                        <span className="dropdown-icon">
                            {(open ? "▲" : "▼") }
                        </span>
                    )}
                </div>
            {open && dropdown && dropdown.length > 0 && createDropdown(dropdown, navRoute)}
        </div>
    );
    
}
return nav_item();}


export default NavItem;