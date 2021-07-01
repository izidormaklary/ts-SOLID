import {Engine} from "./Engine";
import {Car} from "./Car";

export class Tank{

    private _fuel : number = 0;
    private readonly _MAXIMUM_FUEL_CAPACITY: number;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this._MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    set fuel(value: number) {
        this._fuel = value;
    }

    get fuel(): number {
        return this._fuel;
    }

    addFuel(fuel : number) {
        console.log(fuel)
        this._fuel = Math.min(fuel + this._fuel,this._MAXIMUM_FUEL_CAPACITY);
    }
}