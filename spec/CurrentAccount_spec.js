describe('Account', () => {

  var CurrentAccount = require('../lib/CurrentAccount.js')
  var account = new CurrentAccount;

  it('instantiates', () => {
    expect(account).toBeDefined();
  });

  describe('#getBalance', () => {

    it('returns _balance', () => {
      expect(account.getBalance()).toEqual(0)
    });
  });

  describe('#setBalance', () => {

    it('changes _balance by the amount of a given property', () => {
      account.setBalance(1);
      expect(account.getBalance()).toEqual(1);
    });
  });

});
