import { CryptoCoin } from "./crypto-coin";

export class Koers {

    constructor() {

    }

    public volgNummer: number = 0;
    public crypto: CryptoCoin | undefined;
    public waarde: number = 0;
    public timestamp: Date = new Date;

}
