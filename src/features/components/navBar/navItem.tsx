import Link from "next/link";
import "./navItem.css";

const pages= [
    "home",
    "about",
    "contact",
    "shop",
    "products",
    "learn",]

function NavItem({ children }: { children: React.ReactNode }) {
    const tmp = children?.toString();
    // Check if the value is in the pages array
    // If it is, return the value as a link
    if (tmp === undefined) {
        return ( <div>
            {children}
        </div> );
    }
    const value = tmp.split(" ")[0];

    const route = value.toLowerCase();
    if (value !== undefined && pages.includes(route)) {
        if (route === "home") {
            return ( 
                <Link href="/"><div className="nav-item">{children}</div></Link>
            );
        }
        return ( 
            <Link href={"/" + route}><div className="nav-item">{children}</div></Link>
        );
    }

    return ( <div className="nav-item">
        {children}
    </div> );
}

export default NavItem;