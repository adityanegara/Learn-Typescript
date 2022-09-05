export class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount < 0) throw new Error('Invalid ammount');
        this.balance += amount;
        console.log(`Depositing : ${amount}. Your current balance is ${this.balance}`)
    }

    withdraw(amount: number): void {
        if (amount > this.balance)
            throw new Error('Amount is greater than balance!')
        this.balance -= amount;
        console.log(`Withdrawing : ${amount}. Your current balance is ${this.balance}`)
    }
}
