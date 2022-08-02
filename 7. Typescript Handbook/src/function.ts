function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const map = <Input, Output>(arr: Input[],  func: (arg: Input) => Output): Output[]=>{
    return arr.map(func)
}

const s = firstElement(["a", "b", "c"]);
const n = firstElement([1,2,3]);
const u = firstElement([]);