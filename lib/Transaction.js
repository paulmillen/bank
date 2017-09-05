class Transaction {
  constructor(date, amount, balance) {
    this._date = date;
    this._amount = amount
    this._balance = balance
  };

  returnDate() {
    return this._date
  };

  returnAmount() {
    return this._amount
  };

  returnBalance() {
    return this._balance
  };
};

module.exports = Transaction
