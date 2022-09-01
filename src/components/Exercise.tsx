import { ExerciseData } from "../pages/ExercisePage";

interface ExerciseProps {
    exercise: ExerciseData
}

function Exercise({ exercise }: ExerciseProps) {
    return (
        <div>
            <h3>Exercise {exercise.id}</h3>
            <p>{exercise.name}</p>
            <p>Description: <span dangerouslySetInnerHTML={{__html: exercise.description}} /></p>
        </div>
    );
}

export default Exercise;