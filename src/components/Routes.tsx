import CredentialsForm from "./CredentialsForm";
import ExercisePage from "../pages/ExercisePage";
import { Route, Routes as DomRoutes } from "react-router-dom";

export default function Routes() {
    return (
        <DomRoutes>
            <Route path="/" element={<CredentialsForm type="Login" />} />
            <Route path="/exercises" element={<ExercisePage />} />
        </DomRoutes>
    );
}