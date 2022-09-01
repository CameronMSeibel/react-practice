import { useEffect, useState } from "react";
import Exercise from "../components/Exercise";
import { WORKOUT_API } from "../ApiConfig";

export interface ExerciseData {
    id: number;
    name: string;
    description: string;
    category: number;

    muscles: Array<number>;
    equipment: Array<number>;
    variations: Array<number>;
}

function ExercisePage() {

    const [exercises, setExercises] = useState<Array<ExerciseData> | null>(null);

    useEffect(fetchData, []);

    function fetchData(): void {
        // setExercises(tempExercises);
        WORKOUT_API.get("/exercise?language=2")
            .then(response => setExercises(mapData(response.data)))
    }

    function mapData(data: any): Array<ExerciseData> {
        return data.results.map(({id, name, description, category, muscles, equipment, variations}: any) => {
            return { id, name, description, category, muscles, equipment, variations };
        });
    }

    return (
        <>
            <h1>Exercises!</h1>
            { !exercises ? 
            <h1>Loading...</h1> : 
            exercises.map((exercise: ExerciseData) => <Exercise key={exercise.id} exercise={exercise} />) }
        </>
    );
}

export default ExercisePage;
