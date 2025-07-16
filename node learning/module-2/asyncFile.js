// file read in async way
const fs = require('fs');

console.log('Before for async way');

fs.readFile('test.txt', 'utf-8', (err, data) => { // utf-8 is encoding, another is a call back function
    if (err) {
        console.log(err);
    } else {
        console.log(data + "in async way");
    }
});

console.log('After for async way');

// file read in sync way
console.log('Before for sync way');
const data = fs.readFileSync('test.txt', 'utf-8');
console.log(data);
console.log('After for sync way');


// write file in async way
fs.writeFile('testwrite.txt', 'Hello World', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File has been written');
    }
});