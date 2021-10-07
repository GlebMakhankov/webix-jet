import { JetView } from "webix-jet";
import { Storage } from "../models/Storage";
import "./myCustomForm";

export default class CountriesView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;

		const form = {
			view: "myCustomForm",
			fields: ["Name"],
			localId: "countriesForm",
			_: _,
			saveAction: () => {
				const form = this.$$("countriesForm");
				Storage.countries.add(form.getValues());
				form.clear();
			},
		};

		const datatable = {
			view: "datatable",
			localId: "countriesTable",
			columns: [
				{
					id: "Name",
					header: _("Country"),
					fillspace: true,
					sort: "text",
					editor: "text",
				},
				{
					header: "",
					template: "<span class='webix_icon wxi-trash deleteEntry'></span>",
					width: 50,
					sort: "text",
				},
			],
			editable: true,
			editaction: "dblclick",
			onClick: {
				deleteEntry: (e, id) => {
					webix
						.confirm({
							title: _("Delete entry?"),
							text: _("Are you sure about that?"),
						})
						.then(() => {
							Storage.countries.remove(id);
						});
				},
			},
		};

		const ui = {
			rows: [form, datatable],
		};

		return ui;
	}
	init() {
		this.$$("countriesTable").sync(Storage.countries);
	}
}
