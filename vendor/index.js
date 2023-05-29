'use strict';

const eventPool = require('../eventPool');
const handler = require('./handler');

eventPool.on('VENDOR', (store) => {
  setTimeout(() => {
    handler(store);
  }, 1000);
});

eventPool.on('delivered', (payload) => {

    console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);

});