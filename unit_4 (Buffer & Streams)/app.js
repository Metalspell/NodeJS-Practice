const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/created-text.txt');
const compressStream = zlib.createGzip();

// readStream.on('data', (chunk) =>{
//   console.log('----------------');
//   console.log(chunk.toString());
//   writeStream.write(chunk);
// })

const errorHandler = () => {
  readStream.destroy();
  writeStream.end('Oppps? something went wrong:(');
}

readStream.on('error', errorHandler).pipe(compressStream).pipe(writeStream).on('error', errorHandler);