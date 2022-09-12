export class Clock {
    private NUMBER_OF_MINUTES_IN_HOUR = 60;
    private NUMBER_OF_MINUTES_IN_A_DAY = 60 * 24;

    constructor(private _hours: number, private _minutes?: number) {
        (_minutes) ? this._minutes = _minutes : this._minutes = 0;
        this._calculate(this._hours, this._minutes);
    }

    private _calculate(hours: number, minutes: number): void {
        const hoursInMinutes = hours * this.NUMBER_OF_MINUTES_IN_HOUR;
        const totalMinutes = hoursInMinutes + minutes;
        let remainOfMinutesInADay = totalMinutes % this.NUMBER_OF_MINUTES_IN_A_DAY;
        if (remainOfMinutesInADay < 0) {
            remainOfMinutesInADay = this.NUMBER_OF_MINUTES_IN_A_DAY + remainOfMinutesInADay;
        }
        const numberOfHours = Math.trunc(remainOfMinutesInADay / this.NUMBER_OF_MINUTES_IN_HOUR);
        const numberOfMinutes = remainOfMinutesInADay - numberOfHours * this.NUMBER_OF_MINUTES_IN_HOUR;
        this._hours = numberOfHours;
        this._minutes = numberOfMinutes;
    }

    toString(): string {
        const hoursFormat: string = ('0' + this._hours).slice(-2)
        const minutesFormat: string = ('0' + this._minutes).slice(-2)
        return `${hoursFormat}:${minutesFormat}`
    }

    plus(minutes: number): Clock {
        let clock = new Clock(this._hours, (this._minutes) ? this._minutes + minutes : minutes);
        return clock;
    }

    minus(minutes: number): Clock {
        const minute = (this._minutes) ? this._minutes - minutes : -minutes;
        let clock = new Clock(this._hours, minute);
        return clock;
    }

    equals(clock: Clock): boolean {
        if (clock.toString() === this.toString()) {
            return true;
        }
        return false;

    }

}