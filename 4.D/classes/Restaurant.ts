import {Restaurants} from "../interfaces/Restaurants";
import {Oven} from "../interfaces/Oven";

export class Restaurant implements Restaurants{
    _name : string;
    _oven;

    constructor(name : string, oven:Oven=null) {
        this._name = name;
        this._oven = oven;
    }
    get oven(){
        return this._oven;
    }
}