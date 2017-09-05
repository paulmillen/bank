class Bank {
  constructor(account = new CurrentAccount) {
    this._account = account;
    this._transactions = []
  }

  _transaction(amount, date = moment().format('DD/MM/YYYY')) {
    let balance = this._account.getBalance();
    return new Transaction(date, amount, balance);
  }

  _getAccount() {
    return this._account
  }

  _getTransactions() {
    return this._transactions
  }

  deposit(amount) {
    this._getAccount().setBalance(amount)
    this._getTransactions().unshift(this._transaction(amount))
  };

  withdraw(amount) {
    let debit = amount * -1;
    this._getAccount().setBalance(debit)
    this._getTransactions().unshift(this._transaction(debit))
  };

  statement(printer = new Printer(this._getTransactions())) {
    printer.statement()
  };
};

module.exports = Bank;
