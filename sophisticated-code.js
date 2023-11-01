/*  sophisticated-code.js */

// This code is a simulation of a bank account system with multiple features.
// It includes functionalities like creating an account, depositing and withdrawing money, transferring funds between accounts,
// calculating interest, checking account balance, and generating account statements.

class BankAccount {
  constructor(accountNumber, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({
        type: "Deposit",
        amount: amount,
        date: new Date().toISOString(),
      });
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({
        type: "Withdrawal",
        amount: amount,
        date: new Date().toISOString(),
      });
    }
  }

  transfer(amount, targetAccount) {
    if (
      amount > 0 &&
      amount <= this.balance &&
      targetAccount instanceof BankAccount
    ) {
      this.balance -= amount;
      targetAccount.balance += amount;
      this.transactions.push({
        type: "Transfer to " + targetAccount.accountNumber,
        amount: amount,
        date: new Date().toISOString(),
      });
      targetAccount.transactions.push({
        type: "Transfer from " + this.accountNumber,
        amount: amount,
        date: new Date().toISOString(),
      });
    }
  }

  calculateInterest(interestRate) {
    if (interestRate > 0) {
      const interest = (this.balance * interestRate) / 100;
      this.balance += interest;
      this.transactions.push({
        type: "Interest",
        amount: interest,
        date: new Date().toISOString(),
      });
    }
  }

  getAccountBalance() {
    return this.balance;
  }

  generateAccountStatement() {
    let statement = `Account Statement for Account ${this.accountNumber}\n`;
    statement += `Account Holder: ${this.accountHolder}\n\n`;
    
    if (this.transactions.length > 0) {
      statement += "Transaction History:\n";
      statement += "-----------------------------------\n";

      this.transactions.forEach(function(transaction, index) {
        statement += `Transaction ${index + 1}:\n`;
        statement += `Type: ${transaction.type}\n`;
        statement += `Amount: ${transaction.amount}\n`;
        statement += `Date: ${transaction.date}\n`;
        statement += "-----------------------------------\n";
      });
    } else {
      statement += "No transactions found.\n";
    }

    return statement;
  }
}

// Usage Example:
const account1 = new BankAccount(123456, "John Doe");
const account2 = new BankAccount(789012, "Jane Smith");

account1.deposit(1000);
account2.deposit(500);

account1.transfer(500, account2);
account2.withdraw(200);

account1.calculateInterest(5);
account2.calculateInterest(3);

console.log(account1.generateAccountStatement());
console.log(account2.generateAccountStatement());