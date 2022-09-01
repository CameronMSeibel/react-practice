import { CSSProperties } from "react";
import NavItem from "./NavItem";

export default function Navbar() {

    const list: CSSProperties = {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        backgroundColor: "#dddddd"
    }

    return (
        <nav>
            <ul style={list}>
                <NavItem path="/" text="Home" />
                <NavItem path="/exercises" text="Exercises" />
            </ul>
        </nav>
    );
    
}
