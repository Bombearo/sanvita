const pages= [
    "home",
    "about",
    "contact",
    "shop",
    "products",]

function NavItem({ children }: { children: React.ReactNode }) {
    let tmp = children?.toString();
    // Check if the value is in the pages array
    // If it is, return the value as a link
    if (tmp === undefined) {
        return ( <div>
            {children}
        </div> );
    }
    let value = tmp.split(" ")[0];

    let route = value.toLowerCase();
    if (value !== undefined && pages.includes(route)) {
        if (route === "home") {
            return ( <div>
                <a href="/">{children}</a>
            </div> );
        }
        return ( <div>
            <a href={"/" + route}>{children}</a>
        </div> );
    }

    return ( <div>
        {children}
    </div> );
}

export default NavItem;