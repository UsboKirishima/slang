const {Slang} = require('../dist/lib/Slang');

const client = new Slang({ APIkey: ''});

console.log(client.start('government name'))