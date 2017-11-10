export class Product {
    title: string;
    SKU: string;
    price: number;
    departement: string[];
    img: string;
    description: string;

    constructor(title: string, SKU: string, price: number, departement: string[], img: string, description: string) {
        this.title = title;
        this.SKU = SKU;
        this.price = price;
        this.departement = departement;
        this.img = img;
        this.description = description;
    }
}
