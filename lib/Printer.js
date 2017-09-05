class Printer {
  constructor(transactions) {
    this._transactions = transactions;
  };

  _header() {
    return 'date || credit || debit || balance'
  };

  _transactionLine() {
    for (let n of this._transactions) {
      return `${n.returnDate()} || ${n.returnAmount()} || || ${n.returnBalance()}`
    };
  };
};

module.exports = Printer;
