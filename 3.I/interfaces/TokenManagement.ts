export interface TokenManagement {
    _token: string;

    setToken(token: string): void;

    checkToken(token: string): boolean;
}