import { CSSProperties, useEffect, useState } from "react";

interface CredentialsFormProps {
  type: CredentialsFormType
}

export type CredentialsFormType = "Login" | "Register";

function CredentialsForm({ type }: CredentialsFormProps) {

    const MIN_PW_LENGTH = 8;
    const MIN_USERNAME_LENGTH = 6;

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [validPassword, setValidPassword] = useState<boolean>(false);

    const passwordStyles: CSSProperties = {
        borderRadius: "2px",
        borderColor: validPassword ? "black" : "red",
    }

    function checkPasswordValidity() {
        if(type === "Register") {
            setValidPassword(password.length >= MIN_PW_LENGTH && password === confirmPassword);
        } else {
            setValidPassword(password.length >= MIN_PW_LENGTH);
        }
    }

    function handleLogin() {
        // TODO: Log a user in in some type of way
    }

    function handleRegister() {
        // TODO: Register a user in some type of way
    }

    function submit() {
        console.log(username, password);
        if(type === "Login") {
            handleLogin();
        } else {
            handleRegister();
        }
    }

    // useEffect(callback, dependency array) 
    // triggers a callback when state variables in the dependency array are changed
    // With no dependency array, all state variables trigger callback
    // Empty dependency array triggers callback on element loading
    // useEffect(() => console.log(username), [username]);

    useEffect(checkPasswordValidity, [confirmPassword, password, type]);

    return (
        <>
            <input id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input style={passwordStyles} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            { type === "Register" && <><input style={passwordStyles} type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br /></> }
            { !validPassword && <p style={{color: "red", fontSize: "0.75rem", marginTop: 0}}>A valid password must be {MIN_PW_LENGTH} characters in length{type === "Register" && " and match the confirm password field"}.</p> }
            <button 
                style={{display: "block", cursor: "pointer"}} 
                onClick={submit}
                disabled={!validPassword || !(username.length >= MIN_USERNAME_LENGTH)}
            >
                {type}
            </button>
        </>
    );
}

export default CredentialsForm;
