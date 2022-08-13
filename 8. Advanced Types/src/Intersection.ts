type Move = {
    moveUp: () => void,
    moveDown: () => void,
    moveLeft: () => void,
    moveRight: () => void,
};

type Break = {
    break: () => void
}


let vehicle: Move & Break = {
    moveUp: () => console.log('move Up'),
    moveDown: () => console.log('move Down'),
    moveLeft: () => console.log('move Left'),
    moveRight: () => console.log('move Right'),
    break: () => console.log('break'),
}