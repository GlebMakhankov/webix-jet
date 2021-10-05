import { JetView } from "webix-jet";
import { Storage } from "../models/Storage";
import "./myCustomForm";

export default class StatusesView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;

		const form = {
			view: "myCustomForm",
			localId: "statusesForm",
			fields: ["Name", "Icon"],
			saveAction: () => {
				const form = this.$$("statusesForm");
				Storage.statuses.add(form.getValues());
				form.clear();
			},
		};

		const datatable = {
			view: "datatable",
			localId: "statusesTable",
			columns: [
				{
					id: "Name",
					header: _("Status"),
					fillspace: true,
					sort: "text",
					editor: "text",
				},
				{
					id: "Icon",
					header: _("Icon"),
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
							this.$$("statusesTable").remove(id);
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
		this.$$("statusesTable").sync(Storage.statuses);
	}
}
