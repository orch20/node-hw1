const contacts = require("./contacts");

const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.log(contacts.listContacts());
      contacts.listContacts();
      break;

    case "get":
      contacts.getContacts(id);
      break;

    case "add":
      contacts.addContacts(name, email, phone);
      break;

    case "remove":
      contacts.removeContacts(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
