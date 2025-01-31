import { addContact, delContact, listContacts, updateContact } from "./functions";


type Command = {[index: string]: ()=>void}
const commands: Command = {
  "add": addContact,
  "del": delContact,
  "list": listContacts,
  "update": updateContact,
}

const wrongCommandMsg = (cmd: string)=>{
  console.log(cmd+" is not a recognized command please use one of the following commands:");
  for(let cmd in commands){
    console.log(cmd);
  }
}

const args = process.argv;
console.log(args);

const command: string = args[2];
if(!(command in commands)){
  wrongCommandMsg(command);
  process.exit(1)
}

commands[command]()
