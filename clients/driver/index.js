'use strict';

const handler = require('./handler');
const { io } = require('socket.io-client');
const socket = io.connect('http://localhost:3003/caps');

socket.on('pickup', (payload) => {
  setTimeout(() => {
    handler(payload);
  }, 1000);
});

socket.on('in-transit', (payload) => {
  setTimeout(() => {
    socket.emit('delivered', payload);
  }, 1000);
});

socket.on('delivered', (payload) => {

  console.log(`DRIVER: delivered ${payload.orderID}`);

});