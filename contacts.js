const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");
const updateContacts = async (contact) =>
  fs.write(contactsPath, JSON.stringify(contact, null, 2));

async function listContacts() {
  try {
    const response = await fs.readFile(contactsPath);
    return JSON.parse(response);
  } catch (error) {
    console.error(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    return (
      contacts.find((contact) => contact.id === contactId.toString()) || null
    );
  } catch (error) {
    console.error(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(
      (contact) => contact.id === contactId.toString()
    );
    if (index === -1) {
      return null;
    }
    const [result] = contacts.splice(index, 1);
    await updateBooks(books);
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

function addContact(name, email, phone) {}

const contacts = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = contacts;
