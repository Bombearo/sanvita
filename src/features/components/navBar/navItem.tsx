"use client"

import {useState} from "react"
import Link from "next/link";
import "./navItem.css";

const pages= [
    {name:"home",
        dropdown:[]
    },
    {name:"about"},
    {name:"contact"},
    {name:"shop"},
    {name:"products",
        dropdown:["quality"]
    },
    {name:"learn"},
]

const page_names = pages.map((page) =>{
    return page.name;
})



function NavItem({ children }: { children: React.ReactNode }) {
    const tmp = children?.toString();
    const[hover, setHover] = useState(false)

    // Check if the value is in the pages array
    // If it is, return the value as a link
    if (tmp === undefined) {
        return ( <div>
            {children}
        </div> );
    }
    const value = tmp.split(" ")[0];

    const getDropdown = (route:string)=>{
        for (const page of pages){
            if (page.name === route){
                return page.dropdown
            }
        }
        return null;
    }



    const route = value.toLowerCase();

    
    const dropdown = getDropdown(route)

    const createDropdown = (dropdown:string[]) => <div className="dropdown-menu">

        { dropdown.map((item,index) =><div key={index} className="dropdown-item">
            <NavItem>
                {item}
            </NavItem>

        </div>)}
    </div>

    const nav_item = () => (
        <div className={`nav-item ${hover? "nav-active":""}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            {children}
            {hover && dropdown != null && createDropdown(dropdown)}
        </div>
    )

    if (value !== undefined && page_names.includes(route)) {
        if (route === "home") {
            return ( 
                <Link href="/">{nav_item()}</Link>
            );
        }
        return ( 
            <Link href={"/" + route}>{nav_item()}</Link>
        );
    }

    return (nav_item());
}

export default NavItem;