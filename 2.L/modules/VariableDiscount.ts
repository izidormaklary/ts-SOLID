import {Discount} from "./Discount";
export class VariableDiscount implements Discount {

    _value;

    constructor( value: number = 0) {

        this._value = value;

        if (value <= 0) {
            throw new Error('You cannot create a variable discount with a negative value');
        }
    }

    apply(price) {
        return (price - (price * this._value / 100));
    }

    showCalculation(price) {
        return price + " € -  " + this._value + "%";
    }
}