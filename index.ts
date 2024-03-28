#! /usr/bin/env node
import inquirer from "inquirer";

// Bank Balance
let myBalance: number = 80000;
// Pin Code
let myPin: number = 2000;
// Input pin number
let ans = await inquirer.prompt([
  { message: "Enter your pin number", type: "number", name: "PinCode" },
]);
// Check pin code is correct or incorrect
if (ans.PinCode === myPin) {
  console.log("Correct Pin Code");
  let option = await inquirer.prompt([
    {
      message: "Please Select Option",
      type: "list",
      name: "operator",
      choices: ["Cash Withdrawal", "Check Balance", "Fast Cash"],
    },
  ]);
  // Cash Withdrawal
  if (option.operator === "Cash Withdrawal") {
    let cash = await inquirer.prompt([
      { message: "Please Enter Amount", type: "number", name: "withdrawal" },
    ]);
    if (cash.withdrawal > myBalance) {
      console.log("Insufficient Balance");
    } else {
      let cashans = (myBalance -= cash.withdrawal);
      console.log(`Your remaining balance is = ${cashans}`);
    }
  }
  // Check Balance
  else if (option.operator === "Check Balance") {
    console.log(`Your current balance is = ${myBalance}`);
  }
  // Fast Cash
  else if (option.operator === "Fast Cash") {
    let fastcash = await inquirer.prompt([
      {
        message: "Please Select Amount",
        type: "list",
        name: "fcash",
        choices: [
          "1000",
          "3000",
          "5000",
          "10000",
          "15000",
          "20000",
          "Other Amount",
        ],
      },
    ]);
    if (fastcash.fcash === "1000") {
      let remaining1 = (myBalance -= 1000);
      console.log(`Your remaining balance is = ${remaining1}`);
    } else if (fastcash.fcash === "3000") {
      let remaining2 = (myBalance -= 3000);
      console.log(`Your remaining balance is = ${remaining2}`);
    } else if (fastcash.fcash === "5000") {
      let remaining3 = (myBalance -= 5000);
      console.log(`Your remaining balance is = ${remaining3}`);
    } else if (fastcash.fcash === "10000") {
      let remaining4 = (myBalance -= 10000);
      console.log(`Your remaining balance is = ${remaining4}`);
    } else if (fastcash.fcash === "15000") {
      let remaining5 = (myBalance -= 15000);
      console.log(`Your remaining balance is = ${remaining5}`);
    } else if (fastcash.fcash === "20000") {
      let remaining6 = (myBalance -= 20000);
      console.log(`Your remaining balance is = ${remaining6}`);
    } else if (fastcash.fcash === "Other Amount") {
      let otheramount = await inquirer.prompt([
        { message: "Enter Your Amount =", type: "number", name: "other" },
      ]);
      if (otheramount.other > myBalance) {
        console.log("Insufficient Balance");
      } else {
        let remaining7 = (myBalance -= otheramount.other);
        console.log(`Your remaining balance is = ${remaining7}`);
      }
    }
  }
} else {
  console.log("Incorrect Pin Code");
}
