#!/usr/bin/env node
import { homedir } from 'os';
import { resolve } from 'path';
import fs from 'fs-promise';
import readlineSync from 'readline-sync';
import del from 'del';
import chalk from 'chalk';

let fileExists;
let file = resolve(homedir(), '.ig-upload.json');

try {
  fileExists = fs.readFileSync(file, 'utf8');
} catch (err) {}

if (fileExists) {
  del.sync(file, { force: true });
  console.log(`${chalk.cyan('Logout successfully!')}`);
} else {
  console.log(`${chalk.red('not login - try `ig-upload login')}`);
}
