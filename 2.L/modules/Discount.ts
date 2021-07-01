export interface Discount {
    readonly _value?: number;

    apply(price: number): number;

    showCalculation(price: number): string;

}