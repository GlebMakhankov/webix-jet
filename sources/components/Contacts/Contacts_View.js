import { ContactsList } from "./Contacts_List";
import { ContactsForm } from "./Contacts_Form";

export const ContactsViewModule = () => ({
  cols: [ContactsList(), ContactsForm()],
});
