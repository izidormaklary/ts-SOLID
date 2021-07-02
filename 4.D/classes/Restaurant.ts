import {OvenInterface} from "../interfaces/OvenInterface";

export class Restaurant{
    private _name : string;
    private _oven?:OvenInterface;

    constructor(name : string, oven:OvenInterface=null) {
        this._name = name;
        this._oven = oven;
    }
    get oven(){
        return this._oven;
    }
}