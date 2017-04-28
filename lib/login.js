#!/usr/bin/env node
import chalk from 'chalk';
import readlineSync from 'readline-sync';
import { Client, device, file, checkFile } from './utils';

checkFile();

const storage = new Client.CookieFileStorage(file);
const username = readlineSync.question('Enter your username: ');
const password = readlineSync.question('Enter your password: ', {
  hideEchoBack: true
});
Client.Session.create(device, storage, username, password).then(session => {
  session.getAccount().then(function(account) {
    console.log(`${chalk.cyan(`Welcome ${account.params.fullName} !`)}`);
  });
});
