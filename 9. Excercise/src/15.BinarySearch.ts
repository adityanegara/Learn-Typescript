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

export const find = (array: number[], searchValue: number): number | never => {
    let middle = Math.floor(array.length / 2);
    if (array[middle] === searchValue) {
        console.log(`found ${middle}`);
        return middle;
    } if (array[middle] < searchValue) {
        const secondHalf = array.splice(-middle);
        console.log(secondHalf);
        return find(secondHalf, searchValue);
    } if (array[middle] > searchValue) {
        const firstHalf = array.splice(0, middle);
        return find(firstHalf, searchValue);
    }
    throw new Error('Value not in array');
}

