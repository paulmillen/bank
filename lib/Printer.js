class Printer {
  constructor(transactions) {
    this._transactions = transactions;
  };

  _header() {
    return 'date || credit || debit || balance'
  };

  _transactionLines() {
    return this._transactions.map(function(n) {
      if (n.returnAmount() > 0) {
        return `${n.returnDate()} || ${n.returnAmount()} || || ${n.returnBalance()}`
      } else {
        return `${n.returnDate()} || || ${n.returnAmount() * -1} || ${n.returnBalance()}`
      };
    });
  };

  statement() {
    console.log(this._header());
    for (let n of this._transactionLines()) { console.log(n) };
  };
};

module.exports = Printer;
