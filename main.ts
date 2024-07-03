import * as readline from 'readline';

// Define a class for the ATM
class ATM {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    // Method to check the current balance
    checkBalance(): number {
        return this.balance;
    }

    // Method to deposit money
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`You have successfully deposited $${amount}.`);
        } else {
            console.log('Deposit amount must be greater than zero.');
        }
    }

    // Method to withdraw money
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`You have successfully withdrawn $${amount}.`);
        } else if (amount > this.balance) {
            console.log('Insufficient balance for this withdrawal.');
        } else {
            console.log('Withdrawal amount must be greater than zero.');
        }
    }
}

// Create an interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize the ATM with a balance
const myATM = new ATM(500);

// Function to show the menu and prompt user for action
function showMenu() {
    console.log("\nATM Menu:");
    console.log("1. Check Balance");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Exit");
    rl.question("\nChoose an option: ", (option) => {
        switch (option) {
            case '1':
                console.log(`Your current balance is $${myATM.checkBalance()}`);
                showMenu();
                break;
            case '2':
                rl.question("Enter amount to deposit: ", (amount) => {
                    const depositAmount = parseFloat(amount);
                    myATM.deposit(depositAmount);
                    showMenu();
                });
                break;
            case '3':
                rl.question("Enter amount to withdraw: ", (amount) => {
                    const withdrawAmount = parseFloat(amount);
                    myATM.withdraw(withdrawAmount);
                    showMenu();
                });
                break;
            case '4':
                console.log("Thank you for using the ATM. Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                showMenu();
                break;
        }
    });
}

// Start the ATM menu
showMenu();