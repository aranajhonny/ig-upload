#!/usr/bin/env node
"use strict";

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _readlineSync = require("readline-sync");

var _readlineSync2 = _interopRequireDefault(_readlineSync);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _utils.checkFile)();

var storage = new _utils.Client.CookieFileStorage(_utils.file);
var username = _readlineSync2.default.question("Enter your username: ");
var password = _readlineSync2.default.question("Enter your password: ", {
  hideEchoBack: true
});
_utils.Client.Session.create(_utils.device, storage, username, password).then(function (session) {
  session.getAccount().then(function (account) {
    console.log("" + _chalk2.default.cyan("Welcome " + account.params.fullName));
  });
});