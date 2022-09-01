import { ExerciseData } from "../pages/ExercisePage";

interface ExerciseProps {
    exercise: ExerciseData
}

function Exercise({ exercise }: ExerciseProps) {
    return (
        <div>
            <h3>{exercise.id}</h3>
            <p>{exercise.name}</p>
            <td dangerouslySetInnerHTML={{__html: exercise.description}} />
        </div>
    );
}

export default Exercise;