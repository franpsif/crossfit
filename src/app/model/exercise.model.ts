export class Exercise {
    public name: string;
    public difficulty: number;
    public id: number;
    public category: number; // 1 - Cardio, 2 - Machines, 3 - Body
    public exampleLink: string;

    constructor(name: string, difficulty: number, id: number, category: number, exampleLink: string) {
        this.name = name;
        this.difficulty = difficulty;
        this.id = id;
        this.category = category;
        this.exampleLink = exampleLink;
    }
}
