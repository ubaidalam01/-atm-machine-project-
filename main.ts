#!/usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let mypin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "ENTER YOUR PIN CODE",
    type: "number",
  },
]);

if (pinAnswer.pin === mypin) {
  console.log("CORRECT PIN CODE");

  let operationAns = await inquirer.prompt({
    name: "operation",
    message: "SELECT ONE OPTION",
    type: "list",
    choices: ["Withdraw", "Fast Cash", "Balance Inquiry"],
  });

  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "ENTER YOUR AMOUNT",
        type: "number",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("INSUFFICIENT BALANCE");
    } else {
      myBalance -= amountAns.amount;
      console.log("THANKS FOR TRANSACTION");
      console.log(`YOUR REMAINING BALANCE IS ${myBalance}`);
    }
  } else if (operationAns.operation === "Fast Cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "amount1",
        message: "SELECT YOUR FAST CASH",
        type: "list",
        choices: [500, 1000, 5000, 10000, 15000, 20000],
      },
    ]);
    if (fastCashAns.amount1 > myBalance) {
      console.log("INSUFFICIENT BALANCE");
    } else {
      myBalance -= fastCashAns.amount1;
      console.log("THANKS FOR TRANSACTION");
      console.log(`YOUR REMAINING BALANCE IS ${myBalance}`);
    }
  } else if (operationAns.operation === "Balance Inquiry") {
    console.log(`YOUR BALANCE IS ${myBalance}`);
  }
} else {
  console.log("INCORRECT PIN CODE");
}
