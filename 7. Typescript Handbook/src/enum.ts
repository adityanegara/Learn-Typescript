//numeric enum
enum UserResponse {No = 0, Yes = 1}

const respond = (recepient: string, message: UserResponse): void =>{
    console.log(`${recepient} response is ${message}`);
}

respond("Princess Caroline", UserResponse.Yes);

//string enum
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}