import { writeContacts } from "../utils/writeContacts.js";


export const removeAllContacts = async () => {
  try {

    await writeContacts([]);
    console.log('contacts is clear!');

  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
