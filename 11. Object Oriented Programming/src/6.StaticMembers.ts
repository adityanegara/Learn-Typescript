class Person {
    private static _age: number;

    static get age(): number {
        return Person._age;
    }
}


class Ride {
    private static _activeRides: number = 0;

    static get activeRides(): number {
        return Ride._activeRides;
    }

    start() {
        Ride._activeRides++;
    }

    stop() {
        Ride._activeRides--;
    }
}

const riderOne = new Ride();
const riderTwo = new Ride();
riderOne.start();
riderTwo.start();
console.log(Ride.activeRides);
export { }