class CurrentAccount {
  constructor(balance = 0) {
    this._balance = balance;
  };

  getBalance() {
    return this._balance
  };

  setBalance(amount) {
    this._balance += amount
  };
};

module.exports = CurrentAccount;
