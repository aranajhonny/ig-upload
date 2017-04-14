#!/usr/bin/env node
"use strict";

var _os = require("os");

var _path = require("path");

var _fsPromise = require("fs-promise");

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _minimist = require("minimist");

var _minimist2 = _interopRequireDefault(_minimist);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _utils = require("./utils");

var _clipboardy = require("clipboardy");

var _clipboardy2 = _interopRequireDefault(_clipboardy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = new _utils.Client.CookieFileStorage(_utils.file);
var session = new _utils.Client.Session(_utils.device, storage);

var argv = (0, _minimist2.default)(process.argv.slice(2));

var image = argv._[0];

console.log("" + _chalk2.default.cyan("Uploading..."));

_utils.Client.Upload.photo(session, image).then(function (upload) {
  return _utils.Client.Media.configurePhoto(session, upload.params.uploadId);
}).then(function (medium) {
  _clipboardy2.default.writeSync(medium.params.webLink);
  console.log(_chalk2.default.cyan("Ready ") + " " + _chalk2.default.bold(medium.params.webLink) + " (copied to clipboard)");
});