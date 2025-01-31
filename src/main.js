"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const commands = {
    "add": functions_1.addContact,
    "del": functions_1.delContact,
    "list": functions_1.listContacts,
    "update": functions_1.updateContact,
};
const wrongCommandMsg = (cmd) => {
    console.log(cmd + " is not a recognized command please use one of the following commands:");
    for (let cmd in commands) {
        console.log(cmd);
    }
};
const args = process.argv;
console.log(args);
const command = args[2];
if (!(command in commands)) {
    wrongCommandMsg(command);
    process.exit(1);
}
commands[command]();
