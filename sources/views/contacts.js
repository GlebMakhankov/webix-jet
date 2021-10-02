import { JetView } from "webix-jet";
import { ContactsViewModule } from "../components/Contacts/Contacts_View";
import { contacts } from "../models/contacts";

export default class ContactsView extends JetView {
  config() {
    return ContactsViewModule();
  }

  init(view) {
    view.queryView("list").parse(contacts);
  }
}
