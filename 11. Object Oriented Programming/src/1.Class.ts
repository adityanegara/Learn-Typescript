export class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickName?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
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

export { }