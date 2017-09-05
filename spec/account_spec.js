describe('Account', () => {

  var currentAccount = require('../lib/account.js')
  var account = new currentAccount;

  it('instantiates with a balance of 0', () => {
    expect(account.balance).toBeDefined();
  });
});
