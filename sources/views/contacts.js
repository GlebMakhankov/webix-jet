import { JetView } from "webix-jet";
import { contacts } from "../models/contacts";

export default class ContactsView extends JetView {
  config() {
    const createButton = (type) => {
      return {
        view: "button",
        value: type,
        css: type.toLowerCase() == "save" ? "webix_primary" : "",
        click: () => webix.message(`<strong>${type}</strong> button clicked`),
      };
    };
    const contactsForm = {
      view: "form",
      maxWidth: 400,
      margin: 10,
      id: "contactsForm",
      elements: [
        { template: "Form for contacts", type: "section" },
        {
          view: "text",
          label: "The First",
          name: "first",
        },
        {
          view: "text",
          label: "The Second",
          name: "second",
        },
        { maxHeight: 15 },
        {
          margin: 15,
          cols: [createButton("Save"), createButton("Clear")],
        },
        {},
      ],
    };

    const contactsList = {
      view: "list",
      localId: "usersList",
      template: (obj) => `${obj.Name}`,
    };

    const ui = {
      cols: [contactsList, contactsForm],
    };

    return ui;
  }

  init() {
    this.$$("usersList").parse(contacts);
  }
}
