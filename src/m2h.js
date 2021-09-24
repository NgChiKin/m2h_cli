const chalk = require('chalk');
const marked = require('marked');
const path = require('path');
const fs = require('fs');

const hasSameNameFileInThisPath = (fileName, ext) => {
  try {
    fs.accessSync(path.join(__dirname, `${fileName}.${ext}`));
    return true;
  } catch (error) {
    return false;
  }
};

const getText = (fileName, ext) => {
  try {
    const text = fs.readFileSync(
      path.join(__dirname, `${fileName}.${ext}`),
      'utf-8'
    );
    return text;
  } catch (error) {
    console.log(error);
  }
};

const deleteFileByName = (fileName) => {
  try {
    fs.unlinkSync(path.join(__dirname, fileName));
  } catch (error) {
    console.log(error);
  }
};

const m2h = (fileName) => {
  if (!hasSameNameFileInThisPath(fileName, 'md')) {
    throw new Error(chalk.redBright(`no such ${fileName}.md in src`));
  }

  if (hasSameNameFileInThisPath(fileName, 'html')) {
    deleteFileByName(fileName);
  }

  const htmlText = marked(getText(fileName, 'md'));

  fs.writeFileSync()

  console.log(chalk.greenBright(fileName));
};

module.exports = m2h;
