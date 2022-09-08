const wrapInArray = <T>(value: T) => {
    return [value];
}

wrapInArray<string>('adit');
wrapInArray<number>(1);