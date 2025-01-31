import { readFileSync, writeFileSync } from "fs"

type Contact = {[index: string]:{number: string, email: string}};
const db_path = "phonebookDB.json";
let contacts: Contact = {}
const readContacts = ()=>{
  try{
    contacts = JSON.parse(readFileSync(db_path, {encoding:'utf8'}))
  } catch(e){console.log(e)}
}
const writeContacts = ()=>{
  const content = JSON.stringify(contacts);
  writeFileSync(db_path, content);
}

export const addContact = ()=>{
  const cname: string = process.argv[3];
  const number: string = process.argv[4];
  const email: string = process.argv[5];

  if ( !cname || !number || !email) {
    console.log("You should enter name, number, and email.")
    process.exit(1);
  }

  readContacts();

  if (contacts[cname]) {
    console.log(cname + " already exists.");
    process.exit(1);
  }

  contacts[cname] = {number: number, email: email};
  
  writeContacts();
}

export const delContact = ()=>{
  const cname: string = process.argv[3];
  if (!cname) {
    console.log("You should give a name.");
    process.exit(1);
  }

  readContacts()

  if(!contacts[cname]){
    console.log(cname + " not found.")
    process.exit(1)
  }

  delete contacts[cname];
  writeContacts();
}

export const listContacts = ()=>{
  readContacts();
  console.log(contacts);
}

export const updateContact = ()=>{
  const cname: string = process.argv[3];
  const number: string = process.argv[4];
  const email: string = process.argv[5];

  if ( !cname || !number || !email) {
    console.log("You should enter name, number, and email.")
    process.exit(1);
  }

  readContacts();

  if(!contacts[cname]){
    console.log(cname + " not found.");
    process.exit(1);
  }

  contacts[cname] = {number: number, email:email};
  writeContacts();
}

