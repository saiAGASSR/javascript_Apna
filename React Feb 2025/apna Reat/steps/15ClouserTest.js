function outer(){
    let b=10;

    
        function inner(){
            let a =10;
            console.log(a+b)
            return a+b;
        }

        return inner;
}

let innerReturn = outer();
console.log(typeof(innerReturn));
console.log(innerReturn);

let innerReturnValue = innerReturn();
console.log(innerReturnValue);
console.log(typeof(innerReturnValue));


// ------------------------------------------------
function bankAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        deposit: function (amount) {
            balance += amount;
            console.log(`Deposited ${amount}, Balance: ${balance}`);
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log("Insufficient balance!");
            } else {
                balance -= amount;
                console.log(`Withdrew ${amount}, Balance: ${balance}`);
            }
        },
        checkBalance: function () {
            console.log(`Balance: ${balance}`);
        }
    };
}

const myAccount = bankAccount(100);
myAccount.deposit(50);   // Output: Deposited 50, Balance: 150
myAccount.withdraw(30);  // Output: Withdrew 30, Balance: 120
myAccount.checkBalance(); // Output: Balance: 120



