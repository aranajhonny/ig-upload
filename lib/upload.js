#!/usr/bin/env node
import { homedir } from "os";
import { resolve } from "path";
import fs from "fs-promise";
import minimist from "minimist";
import chalk from "chalk";
import { Client, device, file } from "./utils";
import clipboardy from "clipboardy";

const storage = new Client.CookieFileStorage(file);
let session = new Client.Session(device, storage);

const argv = minimist(process.argv.slice(2));

const image = argv._[0];

console.log(`${chalk.cyan("Uploading...")}`);

Client.Upload
  .photo(session, image)
  .then(function(upload) {
    return Client.Media.configurePhoto(session, upload.params.uploadId);
  })
  .then(function(medium) {
    clipboardy.writeSync(medium.params.webLink);
    console.log(
      `${chalk.cyan("Ready ")} ${chalk.bold(medium.params.webLink)} (copied to clipboard)`
    );
  });
