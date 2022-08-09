const fs = require('fs');

fs.readFile('./test.txt', 'utf8', (error, data) => {
  console.log(data.toString());

  fs.mkdir('./createdDir', () => {

    fs.writeFile('./createdDir/test2.txt', `${data} New added text!`, (error) => {
      error ? console.log(error) : null;
    });

  })
});

setTimeout(() => {
  if (fs.existsSync('./createdDir/text2.txt')) {
    fs.unlink('./createdDir/test2.txt', () => { });
  }
}, 4000);

setTimeout(() => {
  if (fs.existsSync('./createdDir')) {
    fs.rmdir('./createdDir', () => { });
  }
}, 6000);