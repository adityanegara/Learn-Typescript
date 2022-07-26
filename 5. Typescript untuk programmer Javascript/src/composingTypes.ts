type MyBool = true | false;
type LockState = "locked" | "unlocked";
type PositiveOddNumberUnderATen = 1| 3| 5| 7|9;
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{name: string}>;

let stringArrray : StringArray = ['a', 'b', 'c'];
let numberArray : NumberArray = [3,4,5];
let objectWithNameArray : ObjectWithNameArray = [{name: 'adit'}, {name: 'aura'}, {name: 'ayesha'}]

let boolean : MyBool = true;
let lockStatus : LockState= "locked";
let oddNumbnerUnderTun : PositiveOddNumberUnderATen = 3;

const getLength = (obj: string| string[]) =>{
    return obj.length;
}
getLength('aditya');
getLength(['1', '2', '3']);