const fs = require('fs');

const readStream = fs.createReadStream('test.txt', 'utf-8'); // utf-8 is encoding
const writeStream = fs.createWriteStream('testwrite.txt'); 

// readStream.pipe(writeStream); // readStream -> writeStream

// readStream.on('data', (chunk) => { // data event
//     console.log(chunk);
// });

// readStream.on('end', () => { // end event
//     console.log('Done');
// });

// readStream.on('error', (err) => {  // error event
//     console.log(err);
// });

// writeStream.on('finish', () => { // finish event
//     console.log('File has been written');
// });

// writeStream.on('error', (err) => {
//     console.log(err);
// });

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

// readStream.on('end', () => {
//     writeStream.end();
// });

// readStream.on('error', (err) => {
//     console.log(err);
// });

readStream.on('data', (chunk) =>{
    console.log(chunk);

    writeStream.write(chunk, (err) => {
        if (err) {
            console.log(err);
        }
    });
})




