"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error('Invalid ammount');
        this.balance += amount;
        console.log(`Depositing : ${amount}. Your current balance is ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance)
            throw new Error('Amount is greater than balance!');
        this.balance -= amount;
        console.log(`Withdrawing : ${amount}. Your current balance is ${this.balance}`);
    }
}
exports.Account = Account;
