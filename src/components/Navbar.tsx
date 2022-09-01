import { CSSProperties } from "react";
import NavItem from "./NavItem";

const list: CSSProperties = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    backgroundColor: "#dddddd"
}

export default function Navbar() {

    return (
        <nav>
            <ul style={list}>
                <NavItem path="/" text="Home" />
                <NavItem path="/exercises" text="Exercises" />
            </ul>
        </nav>
    );
}
