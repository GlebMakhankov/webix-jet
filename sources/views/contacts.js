import { JetView } from "webix-jet";
import ContactsFormView from "../components/contactsForm";
import { Storage } from "../models/Storage";
import getRandomUser from "../functions/GetRandomUser";

export default class ContactsView extends JetView {
  config() {
    const _ = this.app.getService("locale")._;

    const contactsListAddButton = {
      view: "button",
      value: _("Add"),
      css: "webix_primary contactsListAddButton",
      align: "right",
      click: () => {
        const list = this.$$("contactsList");
        Storage.contacts.add(getRandomUser());
        this.setUrlAndSelectAndForm(list.getLastId());
      },
    };

    const contactsList = {
      view: "list",
      localId: "contactsList",
      select: true,
      template: (obj) =>
        `${obj.Name}, ${obj.Email} <span class='webix_icon wxi-trash deleteUser'></span>`,
      on: {
        onAfterSelect: (id) => this.setUrlAndSelectAndForm(id),
      },
      onClick: {
        deleteUser: (e, id) => {
          webix
            .confirm({
              title: _("Delete entry?"),
              text: _("Are you sure about that?"),
            })
            .then(() => {
              this.$$("contactsList").remove(id);
              this.getSubView("form").clearAll();
            });
        },
      },
    };

    const listWithBtn = {
      rows: [contactsList, contactsListAddButton],
    };

    const ui = {
      cols: [listWithBtn, { $subview: ContactsFormView, name: "form" }],
    };

    return ui;
  }

  init() {
    this.$$("contactsList").sync(Storage.contacts);
    this.on(this.app, "app:action:contactsForm:clearAll", () => {
      this.$$("contactsList").unselectAll();
		this.show("/top/contacts");
    });
  }

  ready() {
    const idParam = this.getParam("id");
    const selectId =
      idParam && Storage.contacts.exists(idParam)
        ? idParam
        : this.$$("contactsList").getFirstId();
    this.setUrlAndSelectAndForm(selectId);
  }

  setUrlAndSelectAndForm(selectId) {
    const list = this.$$("contactsList");
    list.select(selectId);
    this.setParam("id", selectId, true);
    this.setFormValues(list.getItem(selectId));
  }

  setFormValues(values) {
    this.getSubView("form").setFormValues(values);
  }
}
