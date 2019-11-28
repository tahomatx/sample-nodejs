const aaa = require('./aaa');

console.log(aaa);
aaa();


const bbb = require('./bbb');
console.log(bbb);

bbb.aaa();
bbb.bbb();


const ccc = require('./ccc');
console.log(ccc);

ccc.aaa();
ccc.bbb();


console.log(require('./ddd'));
