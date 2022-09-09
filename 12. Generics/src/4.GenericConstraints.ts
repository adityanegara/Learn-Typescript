const greeting = <T extends string | number>(name: T): void => {
    console.log(`Hello my name is ${name}`);
}