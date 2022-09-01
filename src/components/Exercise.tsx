import { CSSProperties } from "react";
import { ExerciseData } from "../pages/ExercisePage";

interface ExerciseProps {
    exercise: ExerciseData
}

function Exercise({ exercise }: ExerciseProps) {

    const cardStyles: CSSProperties = {
        margin: "1rem auto",
        padding: "0 1.5rem",
        border: "2px solid gray",
        borderRadius: "0.5rem",
        width: "600px",
    }

    return (
        <div style={cardStyles}>
            <h3 style={{textAlign: "center"}}>Exercise {exercise.id}</h3>
            <p style={{textAlign: "center"}}>{exercise.name}</p>
            <p dangerouslySetInnerHTML={{__html: "Description: " + exercise.description}} />
        </div>
    );
}

export default Exercise;