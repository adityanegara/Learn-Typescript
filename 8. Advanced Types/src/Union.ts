const convertMilesToMeter = (miles: number | string): number => {
    if (typeof miles === "string") {
        return parseInt(miles) * 1609.34
    } else {
        return miles * 1609.34;
    }
}



console.log(convertMilesToMeter('13'));
console.log(convertMilesToMeter(20));