export class Cart {
    total: number;

    constructor(total: number) {
        this.total = total++ || 0;
    }
}
