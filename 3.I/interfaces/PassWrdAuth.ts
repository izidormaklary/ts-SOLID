export interface PassWrdAuth {
    checkPassword(password: string): boolean;

    resetPassword();
}