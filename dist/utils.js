"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.file = exports.device = exports.Client = undefined;
exports.checkFile = checkFile;

var _path = require("path");

var _os = require("os");

var _fsPromise = require("fs-promise");

var _fsPromise2 = _interopRequireDefault(_fsPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Client = exports.Client = require("instagram-private-api").V1;
var device = exports.device = new Client.Device("instagram-upload");
var file = exports.file = (0, _path.resolve)((0, _os.homedir)(), ".ig-upload.json");

function checkFile(file) {
  var fileExists = void 0;
  try {
    fileExists = _fsPromise2.default.readFileSync(file, "utf8");
  } catch (err) {}

  if (fileExists) {
    console.log("" + chalk.red("Already login - try `ig-upload logout`"));
    process.exit();
  } else {
    _fsPromise2.default.writeFile((0, _path.resolve)((0, _os.homedir)(), ".ig-upload.json"), "{}");
  }
}