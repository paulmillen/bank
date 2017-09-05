describe('Printer', () => {

  var Printer = require('../lib/Printer.js')

  let transaction = { returnDate()    { return '01/01/2017' },
                      returnAmount()  { return 1000 },
                      returnBalance() { return 1500 }
                    }

  var printer = new Printer([transaction]);

  it('instantiates', () => {
    expect(printer).toBeDefined();
  });

  describe('#_header', () => {
    it('can print four columns', () => {
      expect(printer._header()).toEqual('date || credit || debit || balance')
    });
  });

  describe('#_transactionLine', () => {
    it('returns the transaction as a string', () => {
      expect(printer._transactionLine()).toEqual('01/01/2017 || 1000 || || 1500')
    });
  });
});
