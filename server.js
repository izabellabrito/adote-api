'use strict';

const app = require('./src/app');
const debug = require('debug')('balta:server');
const http = require('http');

const server = http.createServer(app);

server.listen('3000');
