import ExercisePage from "../pages/ExercisePage";
import { Route, Routes as DomRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function Routes() {
    return (
        <DomRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exercises" element={<ExercisePage />} />
        </DomRoutes>
    );
}