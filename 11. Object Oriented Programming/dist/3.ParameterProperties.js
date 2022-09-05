"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    getBalance() {
        return this._balance;
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
