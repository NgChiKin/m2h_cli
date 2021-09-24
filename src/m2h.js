const chalk = require('chalk');
const marked = require('marked');
const path = require('path');
const fs = require('fs');

// 执行命令时所在的目录
const basePath = process.cwd();

// 判断当前文件是否存在
const hasSameNameFileInThisPath = (fileName, ext) => {
  try {
    const src = path.join(basePath, `${fileName}.${ext}`);
    fs.accessSync(src);
    return true;
  } catch (error) {
    return false;
  }
};

// 读取文件
const getText = (fileName, ext) => {
  try {
    const text = fs.readFileSync(
      path.join(basePath, `${fileName}.${ext}`),
      'utf-8'
    );
    return text;
  } catch (error) {
    console.log(error);
  }
};

// 删除文件
const deleteFileByName = (fileName, ext) => {
  try {
    fs.unlinkSync(path.join(basePath, `${fileName}.${ext}`));
  } catch (error) {
    throw error;
  }
};

//
const htmlGenerator = (fileName, html) => {
  try {
    fs.writeFileSync(path.join(basePath, `${fileName}.html`), html);
    console.log(chalk.greenBright(`${fileName}.html generated successfully`));
  } catch (err) {
    throw err;
  }
};

const m2h = (fileName) => {
  if (!hasSameNameFileInThisPath(fileName, 'md')) {
    throw new Error(chalk.redBright(`no such ${fileName}.md in src`));
  }

  if (hasSameNameFileInThisPath(fileName, 'html')) {
    deleteFileByName(fileName, 'html');
  }

  const htmlText = marked(getText(fileName, 'md'));

  htmlGenerator(fileName, htmlText);
};

module.exports = m2h;
