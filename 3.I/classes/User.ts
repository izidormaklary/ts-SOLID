import {PassWrdAuth} from "../interfaces/PassWrdAuth";
import {FacebookAuth} from "../interfaces/FacebookAuth";
import {GoogleAuth} from "../interfaces/GoogleAuth";
import {Google} from "./Google";
import {Facebook} from "./Facebook";

export class User implements PassWrdAuth, FacebookAuth, GoogleAuth {
    private _password: string = 'user';
    readonly _google = new Google();
    readonly _facebook = new Facebook();

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}