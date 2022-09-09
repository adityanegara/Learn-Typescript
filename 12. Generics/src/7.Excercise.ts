//1) Convert the function below to a generic function
// function echo (arg){return arg;}

function echo<T>(arg: T): T {
    return arg;
}

//2) When compiling the following piece of code, we get an error saying 'Property name 
//does not exist on type T. How can we solve this problem
// function printName<T>(obj: T){
//     console.log(obj.name);
// }

function printName<T extends { name: string }>(obj: T) {
    console.log(obj.name);
}

//3 An Entity should have unique identifier. The type of identifier, however
//is dependent on the use case. IIn some cases, the ID might be a numner, in other cases, it might be
//a string, GUID, etc. Represent the entity using a generic class

class Entity<T>{
    constructor(public id: T) { }
}

//4) Given the following interface, what does keyof User return?
//interface User{
//     userId:number;
//     username: string
// }

//it will return userId and username