// Langkah untuk melakukan binary search adalah

//1) Mulai dengan element yang ditengah
//2) Jika nilai dari element yang ditengah sama dengan nilai yang dicari maka
//kembalikan nilai index dari element tersebut
//3) Jika nilai dari element yang ditengah lebih kecil daripada yang dicari maka
//potong array dari kiri sampai tengah dan ulangi proses 1
//4) Jika nilai dari element yang ditengah lebih besar daripada yang dicari maka
//potong array dari kanan sampai tengah dan ulangi proses 1
//5) Lakukan pengecekan pada poin 2 sampai nilai ditemukan atau
//interval kosong
interface BinarySearchParams {
    array: number[],
    serachValue: number,
    low: number,
    high: number
}



const binarySearch = (binarySearchParams: BinarySearchParams): number => {
    if (binarySearchParams.high >= binarySearchParams.low) {
        const mid: number = binarySearchParams.low + Math.floor((binarySearchParams.high - binarySearchParams.low) / 2);
        if (binarySearchParams.array[mid] == binarySearchParams.serachValue) {
            return mid;
        } if (binarySearchParams.array[mid] > binarySearchParams.serachValue) {
            return binarySearch({
                array: binarySearchParams.array,
                serachValue: binarySearchParams.serachValue,
                low: binarySearchParams.low,
                high: mid - 1,
            })
        } if (binarySearchParams.array[mid] < binarySearchParams.serachValue) {
            return binarySearch({
                array: binarySearchParams.array,
                serachValue: binarySearchParams.serachValue,
                low: mid + 1,
                high: binarySearchParams.high
            })
        }
    }
    return -1;
}



export const find = (array: number[], searchValue: number): number | never => {
    const high: number = array.length - 1;
    const params: BinarySearchParams = {
        array: [...array as number[]],
        serachValue: searchValue,
        low: 0,
        high,
    }
    const searchResult = binarySearch(params);
    if (searchResult < 0) {
        throw new Error('Value not in array')
    }
    return searchResult;
}
