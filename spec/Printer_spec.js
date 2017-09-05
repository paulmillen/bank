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

    it('returns four column string', () => {
      expect(printer._header()).toEqual('date || credit || debit || balance')
    });
  });

  describe('#_transactionLine', () => {

    it('returns the transaction as a string within an array', () => {
      expect(printer._transactionLines()).toEqual(['01/01/2017 || 1000 || || 1500'])
    });

    it('differentiates between a debit and credit', () => {

      let transaction = { returnDate()    { return '01/01/2017' },
                          returnAmount()  { return -1000 },
                          returnBalance() { return 1500 }
                        }

      var printer = new Printer([transaction]);

      expect(printer._transactionLines()).toEqual(['01/01/2017 || || 1000 || 1500'])
    });

    it('prints multiple transactions', () => {

      let transactionOne = {  returnDate()    { return '01/01/2017' },
                              returnAmount()  { return 1000 },
                              returnBalance() { return 1500 }
                        }
      let transactionTwo =  { returnDate()    { return '02/01/2017' },
                              returnAmount()  { return -1000 },
                              returnBalance() { return 500 }
                            }
      let transactionThree =  {  returnDate()   { return '04/01/2017' },
                                returnAmount()  { return 5000 },
                                returnBalance() { return 5500 }
                              }

      var printer = new Printer([transactionOne, transactionTwo, transactionThree]);

      expect(printer._transactionLines()).toEqual(['01/01/2017 || 1000 || || 1500', '02/01/2017 || || 1000 || 500', '04/01/2017 || 5000 || || 5500' ])
    });
  });

  describe('#statement', () => {

    it('prints a header', () => {
      console.log = jasmine.createSpy('log')
      printer.statement();
      expect(console.log).toHaveBeenCalledWith(printer._header())
    });
  });

});
