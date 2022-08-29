const greetWithUppercase = (name: string | null): void => {
    if (name) {
        console.log(`Hello ${name.toUpperCase()}`)
    } else {
        console.log('Hello')
    }
}

greetWithUppercase('Aditya');
greetWithUppercase(null);