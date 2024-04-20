#! /usr/bin/env node
import inquirer from "inquirer";
let totalBalance = 10000;
let pinNumber = 4321;
let pinEntered = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number",
    }
]);
if (pinEntered.pin === pinNumber) {
    console.log("Correct pin code!!!");
    let atmQuestion = await inquirer.prompt([
        {
            name: "account type",
            message: "please select your account type",
            type: "list",
            choices: [
                "Current Account",
                "Saving Account"
            ]
        },
        {
            name: 'transMethod',
            message: 'Select your transaction method',
            type: 'list',
            choices: [
                "Cash withdrawal",
                "Fast cash"
            ]
        }
    ]);
    if (atmQuestion.transMethod == "Cash withdrawl") {
        let cashwithdrawAmount = await inquirer.prompt([
            {
                name: "withdrawl",
                message: "Enter the amount you want to withdraw",
                type: "number"
            }
        ]);
        if (totalBalance >= cashwithdrawAmount.withdrawal) {
            totalBalance -= cashwithdrawAmount.withdrawal;
            console.log(`Your Total Balance is:${totalBalance}`);
        }
        else {
            console.log('Insufficiant Balance');
        }
    }
    else {
        let fastCashAmount = await inquirer.prompt([
            {
                name: 'fastCash',
                message: 'Select the amount you to withdraw',
                type: 'list',
                choices: [
                    "1000",
                    "3000",
                    "5000"
                ]
            }
        ]);
        if (totalBalance >= fastCashAmount.fastCash) {
            totalBalance -= fastCashAmount.fastCash;
            console.log(`Your Total Balance is:${totalBalance}`);
        }
        else {
            console.log('Insufficient Balance');
        }
    }
}
