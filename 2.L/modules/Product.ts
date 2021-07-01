export class Product {
    private _name: string;
    private _price: number;
    private _discount: Discount;

    constructor(name: string, price: number, discount: Discount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }

    get name(): string {
        return this._name;
    }

    get discount(): Discount {
        return this._discount;
    }

    get originalPrice(): number {
        return this._price;
    }

    calculatePrice(): number {
        return this._discount.apply(this._price);
    }

    showCalculation(): string {
        return this._discount.showCalculation(this._price);
    }
}