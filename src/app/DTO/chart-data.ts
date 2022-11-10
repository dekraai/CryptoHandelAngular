export class ChartData {
    public date: Date = new Date;
    public value: number = 0;

    constructor(date: Date, value: number) {
        this.date = date;
        this.value = value;
    }
}
