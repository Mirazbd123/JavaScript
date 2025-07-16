const EventEmitter = require('node:events'); // package for creating custom events

const eventEmitter = new EventEmitter(); // creating event emitter instance

eventEmitter.on('Nam kiya hai?', () => { // event listener
    console.log('Hum hai Binod'); // event handler
});

eventEmitter.on('Nam kiya hai?', (name) => { // event listener
    console.log('Hamari naam ' + name + ' ko maat batana'); // event handler
});

eventEmitter.emit('Nam kiya hai?', 'Banrakas'); // event emitter