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

const mapArrayWithIndex = (array: number[]) => {
    let test = array.map((n, i) => {
        return {
            index: i,
            value: n,
        }
    })
    return test;
}

interface BinarySearchParams {
    array: number[],
    serachValue: number,
    low: number,
    high: number
}

export const find = (array: number[] | BinarySearchParams, searchValue: number): number | never => {
    if ('low' in array === false) {
        const test = {
            array: array,
            serachValue: searchValue,
            low: 0,
            high: 1,
        }
        console.log(test);
    }

    return 1;
}

