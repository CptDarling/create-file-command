#!/usr/bin/env node

const fs = require('fs');
const yargs = require('yargs');
const simpleGit = require('simple-git');

const git = simpleGit();

const argv = yargs
  .option('filename', {
    alias: 'f',
    description: 'Name of the file to create',
    type: 'string',
    demandOption: true
  })
  .option('description', {
    alias: 'd',
    description: 'Description for the JSDoc comment',
    type: 'string',
    demandOption: true
  })
  .help()
  .alias('help', 'h')
  .argv;

if (fs.existsSync(argv.filename)) {
  console.log(`File ${argv.filename} already exists. No action taken.`);
  process.exit(0);
}

git.raw(['config', 'user.name'], (err, result) => {
  if (err) {
    console.error('Failed to get Git user name:', err);
    process.exit(1);
  }

  const author = result.trim();
  const date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
  const content = `/**
   * @filename ${argv.filename}
   * @fileoverview ${argv.description}
   * @fileauthor ${author}
   * @date ${date}
   */

  // Your code here
  `;

  fs.writeFileSync(argv.filename, content, 'utf8');
  console.log(`File ${argv.filename} created with JSDoc comment.`);
});
