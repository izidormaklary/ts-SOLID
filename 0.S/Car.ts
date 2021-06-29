export class Car {
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!

    private _miles : number = 0;
    private _fuel : number = 0;


    //By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor
    private readonly _MAXIMUM_FUEL_CAPACITY: number;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this._MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    get miles(): number {
        return this._miles;
    }


    get MAXIMUM_FUEL_CAPACITY(): number {
        return this._MAXIMUM_FUEL_CAPACITY;
    }
    set fuel(value: number) {
        this._fuel = value;
    }

    get fuel(): number {
        return this._fuel;
    }

    addFuel(fuel : number, MAXIMUM_FUEL_CAPACITY : number) {
        this._fuel = Math.min(fuel + this._fuel, MAXIMUM_FUEL_CAPACITY);
    }
    drive( engine : Engine) {

        if(engine.status === false ||this.fuel <= 0) {
            return;
        }
        this.fuel -= 1;
        this._miles += engine.FUEL_MILEAGE;
    }
}