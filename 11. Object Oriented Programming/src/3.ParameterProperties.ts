export class Account {

    nickName?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number) {
    }

    getBalance(): number {
        return this._balance;
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
