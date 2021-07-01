import {Oven} from "./interfaces/Oven";
import {Restaurants} from "./interfaces/Restaurants";


import {GasOven} from "./classes/GasOven";
import {Stove} from "./classes/Stove";
import {Restaurant} from "./classes/Restaurant";






//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...

let bakery = new Restaurant("Bakery", new GasOven());
bakery.oven.cook("cookies");

let empty = new Restaurant("Empty")

let crepery = new Restaurant("Crepery", new Stove());
crepery.oven.cook("crepes");




