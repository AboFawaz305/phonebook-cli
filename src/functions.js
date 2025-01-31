"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContact = exports.listContacts = exports.delContact = exports.addContact = void 0;
const fs_1 = require("fs");
const db_path = "phonebookDB.json";
let contacts = {};
const readContacts = () => {
    try {
        contacts = JSON.parse((0, fs_1.readFileSync)(db_path, { encoding: 'utf8' }));
    }
    catch (e) {
        console.log(e);
    }
};
const writeContacts = () => {
    const content = JSON.stringify(contacts);
    (0, fs_1.writeFileSync)(db_path, content);
};
const addContact = () => {
    const cname = process.argv[3];
    const number = process.argv[4];
    const email = process.argv[5];
    if (!cname || !number || !email) {
        console.log("You should enter name, number, and email.");
        process.exit(1);
    }
    readContacts();
    if (contacts[cname]) {
        console.log(cname + " already exists.");
        process.exit(1);
    }
    contacts[cname] = { number: number, email: email };
    writeContacts();
};
exports.addContact = addContact;
const delContact = () => {
    const cname = process.argv[3];
    if (!cname) {
        console.log("You should give a name.");
        process.exit(1);
    }
    readContacts();
    if (!contacts[cname]) {
        console.log(cname + " not found.");
        process.exit(1);
    }
    delete contacts[cname];
    writeContacts();
};
exports.delContact = delContact;
const listContacts = () => {
    readContacts();
    console.log(contacts);
};
exports.listContacts = listContacts;
const updateContact = () => {
    const cname = process.argv[3];
    const number = process.argv[4];
    const email = process.argv[5];
    if (!cname || !number || !email) {
        console.log("You should enter name, number, and email.");
        process.exit(1);
    }
    readContacts();
    if (!contacts[cname]) {
        console.log(cname + " not found.");
        process.exit(1);
    }
    contacts[cname] = { number: number, email: email };
    writeContacts();
};
exports.updateContact = updateContact;
