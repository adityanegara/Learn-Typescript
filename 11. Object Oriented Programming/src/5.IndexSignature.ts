class SeatAssignment {
    [seatNumber: string]: string;
}

const seats = new SeatAssignment();
seats.A1 = 'Adit';
seats.A2 = 'Aura';
seats.A3 = 'Ayesha';

console.log(seats.A1);
export { }