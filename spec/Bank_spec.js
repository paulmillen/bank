describe('Bank', () => {

  var Bank = require('../lib/Bank.js')
  let account = { setBalance() {} }
  let amount = 1
  let printer = { statement() {} }
  var bank = new Bank(account)


  it('instantiates', () => {
    expect(bank).toBeDefined();
  });

  describe('#deposit', () => {

    it('stores a transaction', () => {
      spyOn(bank, '_storeTransaction');
      bank.deposit(amount);
      expect(bank._storeTransaction).toHaveBeenCalled();
    });
  });

  describe('#withdraw', () => {

    it('stores a transaction', () => {
      spyOn(bank, '_storeTransaction');
      bank.withdraw(amount);
      expect(bank._storeTransaction).toHaveBeenCalled();
    });

    it('changes the withdrawn amount to a negative', () => {
      spyOn(bank, '_storeTransaction');
      bank.withdraw(amount);
      expect(bank._storeTransaction).toHaveBeenCalledWith(amount * -1);
    });
  });

  describe('#statement', () => {

    it('calls .statement on its property', () => {
      spyOn(printer, 'statement');
      bank.statement(printer);
      expect(printer.statement).toHaveBeenCalled();
    });
  });

});
