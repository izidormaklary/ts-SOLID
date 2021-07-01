export class NoDiscount implements Discount {

    _value = 0;

    constructor( ) {

        this._value = 0;

    }

    apply(price) {
        return price;
    }

    showCalculation(price) {
        return "No discount";
    }

}