export class Account {

    nickName?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number) {
    }

    get balance(): number {
        console.log('getting balance');
        return this._balance;
    }

    set balance(value: number) {
        console.log('setting balance');
        this._balance = value;
    }

    deposit(amount: number): void {
        if (amount < 0) throw new Error('Invalid ammount');
        this._balance += amount;
        console.log(`Depositing : ${amount}. Your current balance is ${this._balance}`)
    }

    withdraw(amount: number): void {
        if (amount > this._balance)
            throw new Error('Amount is greater than balance!')
        this._balance -= amount;
        console.log(`Withdrawing : ${amount}. Your current balance is ${this._balance}`)
    }
}


const account = new Account(1, 'Aditya Negara', 0);
account.balance = 100;
console.log(account.balance);