const {Slang} = require('../dist/lib/Slang');
require('dotenv/config')

const client = new Slang({ APIkey: process.env.APIKEY });

client.example('government name')