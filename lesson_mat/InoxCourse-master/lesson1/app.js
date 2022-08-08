// const userBuilder = require('./helpers/user.builder');
//
// require('./folder');
//
// console.log(userBuilder.string);
//
// const viktor = userBuilder.build('Viktor', 25, 'male');
//
// console.log(viktor);
// console.log('*******************************');
// console.log(__dirname);
// console.log('*******************************');
// console.log(__filename);
// console.log('*******************************');

const fs = require('fs');
const path = require('path');
const util = require('util');

const filePath = path.join(__dirname, 'folder', 'text.txt');
const filePathNew = path.join(__dirname, 'helpers', 'newFile.txt');
const folderPath = path.join(__dirname, 'folder');

const readFilePromise = util.promisify(fs.readFile);
const renameFSPromise = util.promisify(fs.rename);

// fs.writeFile(filePath, 'HELLO WORLD', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     console.log('OK');
// });

// fs.appendFile(filePath, 'HELLO WORLD 2 \n', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     console.log('OK');
// });

// fs.readFile(filePath, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     console.log(data.toString());
// });

// fs.readdir(folderPath, (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     console.log(files);
//
//     files.forEach(file => {
//         const currentFilePath = path.join(folderPath, file);
//         fs.stat(currentFilePath, (err1, stats) => {
//             if (err1) {
//                 console.log(err1);
//                 return;
//             }
//
//             console.log('-__________________________--');
//             console.log(stats.size);
//             console.log(stats.isDirectory(), 'isDirectory');
//             console.log(stats.isFile(), 'isFile');
//         })
//     })
// })


// readFilePromise(filePath).then(data => {
//     console.log(data);
// });


// renameFSPromise(filePath, filePathNew).catch(reason => {
//     console.log(reason);
// });


let readStream = fs.createReadStream(filePathNew);
let writeStream = fs.createWriteStream(filePath);

console.time('STREAM');
readStream.on('data', chunk => {
    writeStream.write(chunk)
});
console.timeEnd('STREAM');

readStream.on('end', () => {
    console.log('END');
})