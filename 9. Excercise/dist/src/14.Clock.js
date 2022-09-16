"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clock = void 0;
class Clock {
    constructor(_hours, _minutes) {
        this._hours = _hours;
        this._minutes = _minutes;
        this.NUMBER_OF_MINUTES_IN_HOUR = 60;
        this.NUMBER_OF_MINUTES_IN_A_DAY = 60 * 24;
        (_minutes) ? this._minutes = _minutes : this._minutes = 0;
        this._calculate(this._hours, this._minutes);
    }
    _calculate(hours, minutes) {
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
    toString() {
        const hoursFormat = ('0' + this._hours).slice(-2);
        const minutesFormat = ('0' + this._minutes).slice(-2);
        return `${hoursFormat}:${minutesFormat}`;
    }
    plus(minutes) {
        let clock = new Clock(this._hours, (this._minutes) ? this._minutes + minutes : minutes);
        return clock;
    }
    minus(minutes) {
        const minute = (this._minutes) ? this._minutes - minutes : -minutes;
        let clock = new Clock(this._hours, minute);
        return clock;
    }
    equals(clock) {
        if (clock.toString() === this.toString()) {
            return true;
        }
        return false;
    }
}
exports.Clock = Clock;
