#!/usr/bin/env node
import path from "path";
import minimist from "minimist";
import spawn from "cross-spawn-async";

const Client = require('instagram-private-api').V1;
const argv = minimist(process.argv.slice(2));
const defaultCommand = "upload";

const commands = new Set([defaultCommand, "login", "help", "logout"]);
const exit = code => {
  process.exit(code);
};
let cmd = defaultCommand;
const bin = path.resolve(__dirname, cmd);

require(bin, "may-exclude");
