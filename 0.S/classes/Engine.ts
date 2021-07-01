import {Car} from "./Car";
import {Tank} from "./Tank";

export class Engine {

    private _status: boolean = false;
    private readonly _FUEL_MILEAGE;


    constructor(FUEL_MILEAGE: number) {
        this._FUEL_MILEAGE = FUEL_MILEAGE;
    }

    get status(): boolean {
        return this._status;
    }


    get FUEL_MILEAGE() {
        return this._FUEL_MILEAGE;
    }

    turnEngineOn() {
        this._status = true;
    }

    turnEngineOff() {
        this._status = false;
    }
    drive( car: Car, tank : Tank ) {
        if(this._status === false ||tank.fuel <= 0) {
            return;
        }
        tank.fuel -= 1;
        car.miles += this._FUEL_MILEAGE;
    }
}