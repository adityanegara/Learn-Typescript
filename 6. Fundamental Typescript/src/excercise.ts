//for each if tgese values, what type will the typescript compiler infer

let a = 100; // number
let b = 'Coffee' //string
let c = [true, false, false] // array
let d = { age: 20 } //age: number
let e = [3] // array
let f; //any
let g = [] //any

//found the error 
// let song : {
//     title: string,
//     releaseYear: number,
//  } = { title: 'My Song'}

//there is no releaseYear property should be

let song: {
    title: string,
    releaseYear: number,
} = { title: 'My Song', releaseYear: 2000 }

// let prices = [100, 200, 300];
// prices[0] = '$100';   

//price is array of number so it should be

let prices = [100, 200, 300];
prices[0] = 11;

// function myFunc(a:number, b:number): number{}
//the function should return a number it should be

function myFunc(a: number, b: number): number {
    return a + b;
}
