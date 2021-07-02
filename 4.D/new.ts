import {OvenInterface} from "./interfaces/OvenInterface";

import {GasOven} from "./classes/GasOven";
import {Stove} from "./classes/Stove";
import {Restaurant} from "./classes/Restaurant";

let bakery = new Restaurant("Bakery", new GasOven());
bakery.oven.cook("cookies");

let empty = new Restaurant("Empty");

let crepery = new Restaurant("Crepery", new Stove());
crepery.oven.cook("crepes");




