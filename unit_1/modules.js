const user = require('./index');
const os = require('os');

console.log(user.sayHi('Jana'));
console.log(os.platform(), os.release());