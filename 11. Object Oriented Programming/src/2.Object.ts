import { Account } from "./1.Class";

const account = new Account(1, 'Adit', 0);
account.deposit(100);

console.log(account.getBalance());
console.log(account instanceof Account);