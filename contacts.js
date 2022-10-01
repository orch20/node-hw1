const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./db/contacts.json");
const updateContacts = async (contact) =>
  await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));

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
    await updateContacts(contacts);
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();

    const contact = {
      id: nanoid(5),
      name,
      email,
      phone,
    };

    const newContactList = [contact, ...contacts];
    await updateContacts(newContactList);

    return contact;
  } catch (error) {
    console.error(error.message);
  }
}

const contacts = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = contacts;
