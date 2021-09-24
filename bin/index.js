#!/usr/bin/env node

const program = require('commander');
const figlet = require('figlet');
const chalk = require('chalk');
const { version } = require('../package.json');

const m2h = require('../src/m2h');


// 首先得拥有一个帅气的logo
console.log(
  chalk.yellow(
    figlet.textSync('Markdown To Html', {
      horizontalLayout: 'full'
    })
  )
);

program.version(version);

program.argument('<name>', '<name>.md to <name>.html');

program.on('--help', () => {
  console.log(`\n create by ${chalk.cyan('ngchikin')} \n `);
});

program.parse(process.argv);

if (process.argv.length <= 2) {
  program.outputHelp();
}

const args = process.argv.slice(2);

m2h(args[0]);