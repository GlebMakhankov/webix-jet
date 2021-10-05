import { JetView } from "webix-jet";
import { Storage } from "../models/Storage";

export default class ContactsFormView extends JetView {
	config() {
		const createButton = (type, clickAction) => {
			return {
				view: "button",
				value: type,
				css: type.toLowerCase() === "save" ? "webix_primary" : "",
				click: () =>
					clickAction
						? clickAction()
						: webix.message("<strong>No</strong> attached event"),
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
				{ template: "Form for contacts", type: "section" },
				{
					view: "text",
					label: "Name",
					name: "Name",
				},
				{
					view: "text",
					label: "Email",
					name: "Email",
				},
				{
					view: "combo",
					localId: "comboBoxCountry",
					label: "Country",
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
					label: "Status",
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
						createButton("Save", () => {
							const form = this.$$("contactsForm");
							if (form.validate()) {
								const entry = form.getValues();
								Storage.contacts.updateItem(entry.id, entry);
								webix.message("Successfully updated!");
								form.clear();
								form.clearValidation();
							}
						}),
						createButton("Clear", () => {
							const form = this.$$("contactsForm");
							form.clear();
							form.clearValidation();
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
}
