const fs = require('fs');
const path = require('path');

const hasSameNameFileInThisPath = (fileName) => {
  try {
    console.log(__dirname);
    fs.accessSync(path.join(__dirname, 'src\\' + fileName))
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};


console.log(hasSameNameFileInThisPath('m2h.js'));