console.log("Hello from JavaScript")

function ATM (amountClient, amountWithdraw){
let dollarATM=200

if(isNaN(amountWithdraw)){
    return 'The input withdraw is not allowed, please try again';
}

if (amountWithdraw>dollarATM){return "Sorry ATM does not have enough money at the moment"}


if (amountWithdraw>amountClient){return `Your do not hame enough money on account`}
else return `Please take your money ${amountWithdraw} dollars. Your balance on the account is ${amountClient-amountWithdraw} dollars`
}



let dollarClient=150
let dollarWithdraw=prompt("Enter amount to withdraw")

let resultATM=ATM(dollarClient, dollarWithdraw)
document.write(resultATM)



