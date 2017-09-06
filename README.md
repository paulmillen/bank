## Bank

A solution to the following problem using JavaScript and Node.js:

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see:  

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### Installation

Clone or fork this repo.

Install Node.js, then:

`$ npm install` to install packages.  (Jasmine, minute.js)

### Instructions

`$ node` to open Node's REPL  
`$ .load app.js` to load relevant classes and instantiate a new bank object  
`$ bank.deposit(amount)`  
`$ bank.withdraw(amount)`  
`$ bank.statement()` prints a statement as in the brief

### Testing

`$ npm test` to run the tests 
