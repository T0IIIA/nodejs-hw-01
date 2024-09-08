import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();

    return `count contacts: ${contacts.length}`;

  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
