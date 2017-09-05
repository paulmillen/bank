describe('Transaction', () => {

  var Transaction = require('../lib/Transaction.js')

  let date = '01/01/2017'
  var transaction = new Transaction(date);

  console.log(transaction)

  it('instantiates', () => {
    expect(transaction).toBeDefined();
  });

  describe('#returnDate', () => {
    it('returns the instantiated date object', () => {
      expect(transaction.returnDate()).toEqual(date);
    });
  });

});
