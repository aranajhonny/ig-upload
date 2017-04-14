#!/usr/bin/env node
"use strict";

var _os = require("os");

var _path = require("path");

var _fsPromise = require("fs-promise");

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _readlineSync = require("readline-sync");

var _readlineSync2 = _interopRequireDefault(_readlineSync);

var _del = require("del");

var _del2 = _interopRequireDefault(_del);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fileExists = void 0;
var file = (0, _path.resolve)((0, _os.homedir)(), ".ig-upload.json");

try {
  fileExists = _fsPromise2.default.readFileSync(file, "utf8");
} catch (err) {}

if (fileExists) {
  _del2.default.sync(file, { force: true });
  console.log("" + _chalk2.default.cyan("Ready!"));
} else {
  console.log("" + _chalk2.default.red("not login - try `ig-upload login"));
}