const render = (document: unknown): void => {
    if (typeof document === 'string') {
        console.log('im a string');
    } else {
        console.log('im not a string');
    }
}
