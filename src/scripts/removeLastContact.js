import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    const removedContact = contacts.slice(0, -1);

    await writeContacts(removedContact);

    if (!contacts.length) {
      return console.log('Contact list is empty');
    }
    console.log('Last contact is removed');

  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
