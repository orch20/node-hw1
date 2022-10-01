const contacts = require("./contacts");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.log("============ contactsList ===========");
      console.log(contactsList);
      console.log("====================================");
      break;

    case "get":
      const contactById = await contacts.getContactById(id);
      console.log("============ contactById ===========");
      console.log(contactById);
      console.log("====================================");
      break;

    case "add":
      const addContact = await contacts.addContacts(name, email, phone);
      console.log("============ addContact ============");
      console.log(addContact);
      console.log("====================================");
      break;

    case "remove":
      const removeById = await contacts.removeContact(id);
      console.log("============ removeById ============");
      console.log(removeById);
      console.log("====================================");
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
