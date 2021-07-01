interface Discount {
    readonly _value?: number;

    apply(price: number): number;

    showCalculation(price: number): string;

}
import {VariableDiscount} from "./modules/VariableDiscount";
import {FixedDiscount} from "./modules/FixedDiscount";
import {NoDiscount} from "./modules/NoDiscount";

import {Product} from "./modules/Product";
import {shoppingBasket} from "./modules/shoppingBasket";

let cart = new shoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount(10)));
// cart.addProduct(new Product('Chair', 25, new FixedDiscount( -10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount(25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount()));

const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product) => {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);

    tableElement.appendChild(tr);
});