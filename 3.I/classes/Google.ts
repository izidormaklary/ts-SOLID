import {TokenManagement} from "../interfaces/TokenManagement";

export class Google implements TokenManagement {
    _token;

    setToken(token) {
        this._token = token;
    }

    checkToken(token) {
        return (token === this._token);
    }
}