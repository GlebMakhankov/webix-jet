import { JetView } from "webix-jet";
import { Storage } from "../models/Storage";

export default class ContactsFormView extends JetView {
  config() {
    const _ = this.app.getService("locale")._;

    const createButton = (type, clickAction) => {
      return {
        view: "button",
        value: type,
        css:
          type.toLowerCase() === "save" || type.toLowerCase() === "сохранить"
            ? "webix_primary"
            : "",
        click: () =>
          clickAction
            ? clickAction()
            : webix.message(_("<strong>No</strong> attached event")),
      };
    };

    const ui = {
      view: "form",
      maxWidth: 400,
      margin: 10,
      localId: "contactsForm",
      rules: {
        Name: webix.rules.isNotEmpty,
        Email: webix.rules.isNotEmpty,
        Country: webix.rules.isNotEmpty,
        Status: webix.rules.isNotEmpty,
      },
      elements: [
        { template: _("Form for contacts"), type: "section" },
        {
          view: "text",
          label: _("Name"),
          name: "Name",
        },
        {
          view: "text",
          label: _("Email"),
          name: "Email",
        },
        {
          view: "combo",
          localId: "comboBoxCountry",
          label: _("Country"),
          name: "Country",
          options: {
            body: {
              template: "#Name#",
            },
          },
        },
        {
          view: "combo",
          localId: "comboBoxStatus",
          label: _("Status"),
          name: "Status",
          options: {
            body: {
              template: "#Name#",
            },
          },
        },
        { maxHeight: 15 },
        {
          margin: 15,
          cols: [
            createButton(_("Save"), () => {
              const form = this.$$("contactsForm");
              if (form.validate()) {
                const entry = form.getValues();
                Storage.contacts.updateItem(entry.id, entry);
                webix.message(_("Successfully updated!"));
                this.clearAll();
              }
            }),
            createButton(_("Clear"), () => {
              this.clearAll();
            }),
          ],
        },
        {},
      ],
    };

    return ui;
  }

  init() {
    this.$$("comboBoxCountry").getList().data.sync(Storage.countries);
    this.$$("comboBoxStatus").getList().data.sync(Storage.statuses);
  }

  setFormValues(values) {
    this.$$("contactsForm").setValues(values);
  }

  clearAll() {
    const form = this.$$("contactsForm");
    form.clear();
    form.clearValidation();
	 this.app.callEvent("app:action:contactsForm:clearAll");
  }
}
