"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_Class_1 = require("./1.Class");
const account = new _1_Class_1.Account(1, 'Adit', 0);
account.deposit(100);
console.log(account.getBalance());
console.log(account instanceof _1_Class_1.Account);
