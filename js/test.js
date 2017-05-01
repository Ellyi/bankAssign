$ function BankAccount() {
  console.log
}

$ BankAccount.prototype.methodName = function () {
  initial: function () {
    return 'initial balance'
  };
  Deposit: function () {
    return 'current balance'
  };
  Withdraw: function () {
    return 'balance after withdrawal'
  };
};

var account = new BankAccount();
var account2 = new BankAccount();
var account3 = new BankAccount();
var account4 = new BankAccount();
var account4 = new BankAccount();
