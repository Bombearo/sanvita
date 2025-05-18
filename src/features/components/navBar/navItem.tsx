import Link from "next/link";

const pages= [
    "home",
    "about",
    "contact",
    "shop",
    "products",]

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
            return ( <div>
                <Link href="/">{children}</Link>
            </div> );
        }
        return ( <div>
            <Link href={"/" + route}>{children}</Link>
        </div> );
    }

    return ( <div>
        {children}
    </div> );
}

export default NavItem;