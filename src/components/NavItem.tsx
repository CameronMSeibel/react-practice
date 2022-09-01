import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
    path: string,
    text: string
}

export default function NavItem({path, text}: NavItemProps) {

    const [hover, setHover] = useState<boolean>(false);

    const listItem: CSSProperties = {
        display: "inline-block",
        backgroundColor: hover ? "black" : "inherit"
    }
    
    const link: CSSProperties = {
        display: "block",
        padding: "0.5rem 1rem",
        textDecoration: "none",
        color: hover ? "white" : "black",
    }


    return (
        <li 
            style={listItem}
            onMouseEnter={() => setHover(!hover)}
            onMouseOut={() => setHover(!hover)}
            >
                <Link 
                    to={path} 
                    style={link}
                    >
                        {text}
                </Link>
        </li>
    );

}