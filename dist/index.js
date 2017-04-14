#!/usr/bin/env node
"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _minimist = require("minimist");

var _minimist2 = _interopRequireDefault(_minimist);

var _crossSpawnAsync = require("cross-spawn-async");

var _crossSpawnAsync2 = _interopRequireDefault(_crossSpawnAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Client = require('instagram-private-api').V1;
var argv = (0, _minimist2.default)(process.argv.slice(2));
var defaultCommand = "upload";

var commands = new Set([defaultCommand, "login", "help", "logout"]);
var exit = function exit(code) {
  process.exit(code);
};
var cmd = defaultCommand;
var bin = _path2.default.resolve(__dirname, cmd);

require(bin, "may-exclude");