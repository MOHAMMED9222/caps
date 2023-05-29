'use strict';

const { io } = require('socket.io-client');
const socket = io.connect('http://localhost:3003/caps');


var Chance = require('chance');
var chance = new Chance();

module.exports = (store) => {
  
  const payload = {
    store: store,
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };

  
  socket.emit('pickup', payload);

};