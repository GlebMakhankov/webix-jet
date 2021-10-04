import { JetView } from "webix-jet";

export default class SettingsView extends JetView {
  config() {
    const segmentedButton = {
      view: "segmented",
      value: "en",
      options: [
        { id: "ru", value: "Russian" },
        { id: "en", value: "English" },
      ],
    };

    return segmentedButton;
  }
}
