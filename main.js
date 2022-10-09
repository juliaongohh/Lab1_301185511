import {halfOf, multiply} from 'lib';
console.log(halfOf(84));
console.log(multiply(21, 2));

import doSomething from 'doSomething';
doSomething();

import { flag, touch } from 'validator';
console.log(flag);
touch();
console.log(flag);

const http = require('http');
http.createServer((req, res) => {
res.writeHead(200, {
'Content-Type': 'text/plain'
});
res.end('Hello World');
}).listen(3000);
console.log('Server running at http://localhost:3000/');