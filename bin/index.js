#!/usr/bin/env node

const program = require('commander');
const { version } = require('../package.json');

program.version(version);

program.argument('<name>', '<name>.md to <name>.html');

program.parse(process.argv);
