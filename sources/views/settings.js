import { JetView } from "webix-jet";

export default class SettingsView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;

		const segmentedButton = {
			view: "segmented",
			value: "en",
			localId: "lang",
			options: [
				{ id: "ru", value: _("Russian") },
				{ id: "en", value: _("English") },
			],
			click: () => this.toggleLanguage(),
		};

		return segmentedButton;
	}

	toggleLanguage() {
		const langs = this.app.getService("locale");
		const lang = this.$$("lang");
		const value = lang.getValue();
		langs.setLang(value);
	}
}
