describe('Transaction', () => {

  var Transaction = require('../lib/Transaction.js')

  let date = '01/01/2017'
  let amount = 1000
  let balance = 1500
  var transaction = new Transaction(date, amount, balance);

  it('instantiates', () => {
    expect(transaction).toBeDefined();
  });

  describe('#returnDate', () => {

    it('returns the instantiated date object', () => {
      expect(transaction.returnDate()).toEqual(date);
    });
  });

  describe('#returnAmount', () => {

    it('returns the instantiated date object', () => {
      expect(transaction.returnAmount()).toEqual(amount);
    });
  });

  describe('#returnBalance', () => {

    it('returns the instantiated date object', () => {
      expect(transaction.returnBalance()).toEqual(balance);
    });
  });


});
