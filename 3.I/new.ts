import {TokenManagement} from "./interfaces/TokenManagement";
import {GoogleAuth} from "./interfaces/GoogleAuth";
import {FacebookAuth} from "./interfaces/FacebookAuth";
import {PassWrdAuth} from "./interfaces/PassWrdAuth";

import {Google} from "./classes/Google";
import {Facebook} from "./classes/Facebook";

import {GoogleBot} from "./classes/GoogleBot";
import {Admin} from "./classes/Admin";
import {User} from "./classes/User";

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');

let guest = new User;
let admin = new Admin;
let bot;
// bot = new GoogleBot();
document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    let user = loginAsAdminElement.checked ? admin
        : bot ? bot
            : guest;
    console.log(user._facebook)
    if (!loginAsAdminElement.checked) {
        if (user == guest) {
            user._facebook.setToken('secret_token_fb');
        }
        user._google.setToken('secret_token_google');

    }
    console.log(user)
    debugger;

    let auth = false;
    switch (true) {
        case (typeGoogleElement.checked && user != admin) || user == bot:
            auth = user._google.checkToken('secret_token_google');
            break;
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeFacebookElement.checked && user != admin:
            debugger;
            auth = user._facebook.checkToken('secret_token_fb');
            break;
    }

    if (auth) {
        alert('login success');
    } else {
        alert('login failed');
    }
});

resetPasswordElement.addEventListener('click', (event) => {
    event.preventDefault();

    let user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});