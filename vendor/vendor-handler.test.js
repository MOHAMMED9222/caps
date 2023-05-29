'use strict';

const eventPool = require('../eventPool');
const handler= require('./handler');


console.log = jest.fn();
eventPool.emit = jest.fn();


describe('Vendor Handler', () => {
  it('takes a store and creates a payload', () => {
    const payload = 'Test';
    handler(payload);
    expect(console.log).

  });
});
