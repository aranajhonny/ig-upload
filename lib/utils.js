import { resolve } from "path";
import { homedir } from "os";
import fs from "fs-promise";
export const Client = require("instagram-private-api").V1;
export const device = new Client.Device("instagram-upload");
export let file = resolve(homedir(), ".ig-upload.json");

export function checkFile(file) {
  let fileExists;
  try {
    fileExists = fs.readFileSync(file, "utf8");
  } catch (err) {}

  if (fileExists) {
    console.log(`${chalk.red("Already login - try `ig-upload logout`")}`);
    process.exit();
  } else {
    fs.writeFile(resolve(homedir(), ".ig-upload.json"), "{}");
  }
}
