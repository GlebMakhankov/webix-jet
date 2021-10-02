import { JetView } from "webix-jet";

export default class SettingsView extends JetView {
  config() {
    return {
      view: "segmented",
      multiview: true,
      value: "en",
      options: [
        { id: "ru", value: "Russian" },
        { id: "en", value: "English" },
      ],
    };
  }
}
