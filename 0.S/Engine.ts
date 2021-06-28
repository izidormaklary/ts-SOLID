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
}