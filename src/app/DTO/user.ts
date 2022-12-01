import { CryptoTrigger } from "./crypto-trigger";
import { Role } from "./role";

export class User {
    userId: number = 0;
    username: string = "";
    password: string = "";
    email: string = "";
    firstname: string = "";
    enabled: boolean = true;
    passwordLastSet: number = 0;
    roles: Role[] = [];
    cryptoTriggers: CryptoTrigger[] = [];
    active: boolean = true;
}
