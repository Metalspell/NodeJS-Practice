const fs = require('fs');

const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/created-text.txt')

// readStream.on('data', (chunk) =>{
//   console.log('----------------');
//   console.log(chunk.toString());
//   writeStream.write(chunk);
// })

const errorHandler = () => {
  readStream.destroy();
  writeStream.end('Oppps? something went wrong:(');
}

readStream.on('error', errorHandler).pipe(writeStream).on('error', errorHandler);