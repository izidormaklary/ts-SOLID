import {Engine} from "./Engine";
import {Tank} from "./Tank";
import {MusicPlayer} from "./MusicPlayer";

export class Car {

    private _miles: number = 0;

    readonly _engine: Engine;
    readonly _tank: Tank;
    readonly _musicPlayer: MusicPlayer;

    constructor(FUEL_MILEAGE: number, MAXIMUM_FUEL_CAPACITY: number) {
        this._engine = new Engine(FUEL_MILEAGE);
        this._tank = new Tank(MAXIMUM_FUEL_CAPACITY);
        this._musicPlayer = new MusicPlayer(0, 50);
    }


    //By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor


    get engine(): Engine {
        return this._engine;
    }

    get tank(): Tank {
        return this._tank;
    }

    get musicPlayer(): MusicPlayer {
        return this._musicPlayer;
    }

    get miles(): number {
        return this._miles;
    }

    set miles(value: number) {
        this._miles = value;
    }

}