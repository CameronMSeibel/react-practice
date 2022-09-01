import { CSSProperties, useState } from "react";
import CredentialsForm, { CredentialsFormType } from "../components/CredentialsForm";

function HomePage() {

    const [type, setType] = useState<CredentialsFormType>("Login")
    const [hover, setHover] = useState<boolean>(false);

    function toggleType() {
        setType(type === "Login" ? "Register" : "Login");
    }

    const formStyles: CSSProperties = {
        margin: "2rem auto",
        maxWidth: "200px",
        display: "flex",
        flexDirection: "column"
    }

    const toggleStyles: CSSProperties = {
        display: "block",
        margin: "1rem auto",
        backgroundColor: "inherit",
        border: "none",
        color: "blue",
        cursor: "pointer",
        textDecoration: hover ? "underline" : "none",
    }

    return (
        <main>
            <h1 style={{textAlign: "center"}}>{type}</h1>
            <div style={formStyles}>
                <CredentialsForm type={type} />
            </div>
            <button 
                    style={toggleStyles} 
                    onClick={toggleType}
                    onMouseEnter={() => setHover(!hover)}
                    onMouseOut={() => setHover(!hover)}
                >
                    {type === "Login" ? "Sign up instead" : "Already a user? Log in here."}
            </button>
        </main>
    );

}

export default HomePage;
