class StorageConstructor {
	constructor() {
		this.contacts = new webix.DataCollection({
			url: "http://localhost:8096/api/v1/contacts/",
			save: "rest->http://localhost:8096/api/v1/contacts/",
		});
		this.countries = new webix.DataCollection({
			url: "http://localhost:8096/api/v1/countries/",
			save: "rest->http://localhost:8096/api/v1/countries/",
		});
		this.statuses = new webix.DataCollection({
			url: "http://localhost:8096/api/v1/statuses/",
			save: "rest->http://localhost:8096/api/v1/statuses/",
		});
	}
}

export const Storage = new StorageConstructor();
