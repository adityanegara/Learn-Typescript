"use strict";
class Person {
    static get age() {
        return Person._age;
    }
}
class Ride {
    static get activeRides() {
        return Ride._activeRides;
    }
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
}
Ride._activeRides = 0;
const riderOne = new Ride();
const riderTwo = new Ride();
riderOne.start();
riderTwo.start();
console.log(Ride.activeRides);
