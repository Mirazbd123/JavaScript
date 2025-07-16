const var1 = require('./app-1'); // importing as object

console.log(var1.x);
console.log(var1.y);
console.log(var1.add(var1.x, var1.y));

// name alliasing
const { x, y, add } = require('./app-1'); // importing as object
const {x: x3, y: y3, add: add3} = require('./app-3'); // seems like port mapping

console.log(x);
console.log(y);
console.log(add(x, y));

console.log(x3);
console.log(y3);
console.log(add3(x3, y3));

// dui module er variable gulo jeheto eki name e ache tai ektar name mapping er maddhome change kora hyce
