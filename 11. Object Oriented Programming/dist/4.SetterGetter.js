"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        console.log('getting balance');
        return this._balance;
    }
    set balance(value) {
        console.log('setting balance');
        this._balance = value;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error('Invalid ammount');
        this._balance += amount;
        console.log(`Depositing : ${amount}. Your current balance is ${this._balance}`);
    }
    withdraw(amount) {
        if (amount > this._balance)
            throw new Error('Amount is greater than balance!');
        this._balance -= amount;
        console.log(`Withdrawing : ${amount}. Your current balance is ${this._balance}`);
    }
}
exports.Account = Account;
const account = new Account(1, 'Aditya Negara', 0);
account.balance = 100;
console.log(account.balance);
