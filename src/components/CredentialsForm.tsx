import { useEffect, useState } from "react";

interface CredentialsFormProps {
  type: CredentialsFormType
}

type CredentialsFormType = "Login" | "Register";

function CredentialsForm({ type }: CredentialsFormProps) {

    const [username, setUsername] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    function submit() {
        console.log(username, password);
    }

    // useEffect(callback, dependency array) 
    // triggers a callback when state variables in the dependency array are changed
    // With no dependency array, all state variables trigger callback
    // Empty dependency array triggers callback on element loading
    useEffect(() => console.log(username), [username]);


    return (
        <>
            <input id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            { type === "Register" && <><input type="password" placeholder="Confirm Password" /><br /></> }
            <button onClick={submit}>{type}</button>
        </>
    );
}

export default CredentialsForm;
