export class Fuel{

    private _fuel : number = 0;


    constructor(fuel: number) {
        this._fuel = fuel;
    }

    set level(value: number) {
        this._fuel = value;
    }

    get level(): number {
        return this._fuel;
    }

    addFuel(fuel : number, MAXIMUM_FUEL_CAPACITY : number) {
        this._fuel = Math.min(fuel + this._fuel, MAXIMUM_FUEL_CAPACITY);
    }
}