import { useEffect, useState } from "react";
import Exercise from "../components/Exercise";

export interface ExerciseData {
    id: number;
    name: string;
    description: string;
    category: number;

    muscles: Array<number>;
    equipment: Array<number>;
    variations: Array<number>;
}

const tempExercises: Array<ExerciseData> = [

];

function ExercisePage() {

    const [exercises, setExercises] = useState<Array<ExerciseData> | null>(null);

    useEffect(fetchData, []);

    function fetchData(): void {
        setExercises(tempExercises);
    }

    return (
        <>
            <h1>Exercises!</h1>
            { !exercises ? 
            <h1>Loading...</h1> : 
            exercises.map((exercise: ExerciseData) => <Exercise exercise={exercise} />) }
        </>
    );
}

export default ExercisePage;
