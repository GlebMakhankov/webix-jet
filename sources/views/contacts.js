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
				this.setUrlAndSelect(list.getLastId());
			},
		};

		const contactsList = {
			view: "list",
			localId: "contactsList",
			select: true,
			template: (obj) =>
				`${obj.Name}, ${obj.Email} <span class='webix_icon wxi-trash deleteUser'></span>`,
			on: {
				onAfterSelect: (id) => {
					const form = this.getSubView("form").getRoot();
					form.setValues(this.$$("contactsList").getItem(id));
					this.setParam("id", id, true);
				},
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
	}

	ready() {
		const idParam = this.getParam("id");
		const list = this.$$("contactsList");
		const selectId =
						idParam && Storage.contacts.exists(idParam) ? idParam : list.getFirstId();
		this.setUrlAndSelect(selectId);
	}

	setUrlAndSelect(selectId) {
		const form = this.getSubView("form").getRoot();
		const list = this.$$("contactsList");
		form.setValues(list.getItem(selectId));
		list.select(selectId);
	}
}
