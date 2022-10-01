const fs = require("fs");

/*

 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
function listContacts() {
  return "yo yo yo";
}

function getContactById(contactId) {}

function removeContact(contactId) {}

function addContact(name, email, phone) {}

const contacts = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = contacts;
