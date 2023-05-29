'use strict';

const eventPool = require('../eventPool');
require('./handler');


jest.mock('../eventPool', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});

console.log = jest.fn();

describe('Driver', () => {
  it('emits an event', () => {
    let payload = {
      store: 'store',
      orderID: '1234',
      customer: 'Jordan',
      address: 'My house',
    };
    handler(payload);
  });
})