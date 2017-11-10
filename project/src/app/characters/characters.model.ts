export class Character {
    abilities: string[];
    img: string;
    description: string;

    constructor(abilities: string[], img: string, description: string) {
        this.abilities = abilities;
        this.img = img;
        this.description = description;
    }
}
