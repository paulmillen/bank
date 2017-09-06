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
        return `${n.returnDate()} || ${Number(n.returnAmount()).toFixed(2)} || || ${Number(n.returnBalance()).toFixed(2)}`
      } else {
        return `${n.returnDate()} || || ${Number(n.returnAmount()).toFixed(2) * -1} || ${Number(n.returnBalance()).toFixed(2)}`
      };
    });
  };

  statement() {
    console.log(this._header());
    for (let n of this._transactionLines()) { console.log(n) };
  };
};

module.exports = Printer;
