interface GoogleAuth {
    readonly _google: object;
}

interface FacebookAuth {
    readonly _facebook: object;
}

interface PassWrdAuth {
    checkPassword(password: string): boolean;

    resetPassword();
}

interface TokenManagement {
    _token: string;

    setToken(token: string): void;

    checkToken(token: string): boolean;
}

class Google implements TokenManagement {
    _token;

    setToken(token) {
        this._token = token;
    }

    checkToken(token) {
        return (token === this._token);
    }
}

class Facebook implements TokenManagement {
    _token;

    setToken(token) {
        this._token = token;
    }

    checkToken(token) {
        return (token === this._token);
    }
}

class User implements PassWrdAuth, FacebookAuth, GoogleAuth {
    private _password: string = 'user';
    readonly _google: object = new Google();
    readonly _facebook: object = new Facebook();

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}

//admin cannot use google or facebook token
class Admin implements PassWrdAuth {
    private _password: string = 'admin';

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}

class GoogleBot implements GoogleAuth {
    readonly _google = new Google();
}

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