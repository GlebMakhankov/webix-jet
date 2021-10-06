import { JetView } from "webix-jet";
import CountriesView from "../components/countries";
import StatusesView from "../components/statuses";

export default class DataView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;

		const multiviewTabbar = {
			view: "tabbar",
			id: "datapageTabbar",
			multiview: true,
			options: [
				{ value: _("Countries"), id: "countries" },
				{ value: _("Statuses"), id: "statuses" },
			],
		};

		const multiview = {
			gravity: 8,
			cells: [
				{ id: "countries", cols: [CountriesView] },
				{ id: "statuses", cols: [StatusesView] },
			],
		};

		const ui = {
			rows: [multiviewTabbar, multiview],
		};

		return ui;
	}
}
