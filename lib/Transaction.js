class Transaction {
  constructor(date) {
    this._date = date;
  };

  returnDate() {
    return this._date
  };
};

module.exports = Transaction
