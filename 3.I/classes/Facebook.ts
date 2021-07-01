import {TokenManagement} from "../interfaces/TokenManagement";

export class Facebook implements TokenManagement {
    _token;

    setToken(token) {
        this._token = token;
    }

    checkToken(token) {
        return (token === this._token);
    }
}