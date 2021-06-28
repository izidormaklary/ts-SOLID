import {Fuel} from "./Fuel";
import {Engine} from "./Engine";
export class Car {
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!

    private _miles : number = 0;


    //By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor
    private readonly _MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number = 10;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this._MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    get miles(): number {
        return this._miles;
    }


    get MAXIMUM_FUEL_CAPACITY(): number {
        return this._MAXIMUM_FUEL_CAPACITY;
    }

    drive(fuel : Fuel , engine : Engine) {
        console.log(engine.status)

        if(engine.status === false || fuel.level <= 0) {
            return;
        }
        fuel.level -= 1;
        this._miles += engine.FUEL_MILEAGE;
    }
}