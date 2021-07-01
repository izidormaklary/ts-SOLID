import {Google} from "./Google";
import {GoogleAuth} from "../interfaces/GoogleAuth";

export class GoogleBot implements GoogleAuth {
    readonly _google = new Google();
}
