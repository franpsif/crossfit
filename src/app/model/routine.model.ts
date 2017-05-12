import { Exercise } from './exercise.model';

export class Routine {
    public name: string;
    public exercises: Exercise[];

    constructor(name: string, exercises: Exercise[]) {
        this.name = name;
        this.exercises = exercises;
    }
}
