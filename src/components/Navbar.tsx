import { CSSProperties } from "react";
import { Link } from "react-router-dom";

const link: CSSProperties = {
    display: "block",
    padding: "0.5rem 1rem",
    textDecoration: "none",
    
}

const list: CSSProperties = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    backgroundColor: "#dddddd"
}

const listItem: CSSProperties = {
    display: "inline-block"
}

export default function Navbar() {
    return (
        <nav>
            <ul style={list}>
                <li style={listItem}><Link to="/" style={link}>Home</Link></li>
                <li style={listItem}><Link to="/exercises" style={link}>Exercises</Link></li>
            </ul>
        </nav>
    );
}