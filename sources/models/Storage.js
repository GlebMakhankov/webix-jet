import { contacts } from "./contacts";
import { countries } from "./countries";
import { statuses } from "./statuses";

class StorageConstructor {
	constructor() {
		this.contacts = new webix.DataCollection({
			data: contacts,
		});
		this.countries = new webix.DataCollection({
			data: countries,
		});
		this.statuses = new webix.DataCollection({
			data: statuses,
		});
	}
}

export const Storage = new StorageConstructor();
