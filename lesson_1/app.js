/* initialization of modules */
const fs = require('fs');
const path = require('path');
const util = require('util');

/* initialization of methods */
const readFile = util.promisify(fs.readFile);
const readFolder = util.promisify(fs.readdir);
const renameFile = util.promisify(fs.rename);

/* write paths to folders containing a list of persons */
const folderForMalePersons = path.join(__dirname, 'boys');
const folderForFemalePersons = path.join(__dirname, 'girls');

async function genderSorting(currentPath, destination, gender) {
  try {
    // get a list of all files in the folder fot our loop
    let listOfFilesInFolder = await readFolder(currentPath);
    
    /* using a loop, we process each individual file */
    listOfFilesInFolder.forEach(async element => {
      // get the path to the file
      let wayToEachPerson = path.join(currentPath, element);
      // get each person
      let human = JSON.parse(await readFile(wayToEachPerson));
      // based on the gender of each, we place the person in the desired folder
      if (human.gender === gender) {
        renameFile(wayToEachPerson, path.join(destination, element));
      }
    });
  } catch (err) {
    console.log(err);
  }
}

genderSorting(folderForMalePersons, folderForFemalePersons, 'female');
genderSorting(folderForFemalePersons, folderForMalePersons, 'male');