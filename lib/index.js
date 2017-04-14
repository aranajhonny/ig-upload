#!/usr/bin/env node
import path from "path";
import minimist from "minimist";
import spawn from "cross-spawn-async";

const Client = require("instagram-private-api").V1;

const defaultCommand = "upload";

const commands = new Set([defaultCommand, "login", "help", "logout"]);

const exit = code => {
  process.exit(code);
};

const args = process.argv.slice(2);
let cmd = args[0] ? args[0] : defaultCommand;

if (!commands.has(cmd)) {
  cmd = defaultCommand;
}

if (cmd === "upload") {
  process.argv = process.argv.slice(0, 2).concat(args);
}

const bin = path.resolve(__dirname, cmd);

require(bin, "may-exclude");
