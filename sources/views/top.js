import { JetView, plugins } from "webix-jet";
import { Sidemenu } from "../components/Sidemenu/Sidemenu_View.js";

export default class TopView extends JetView {
  config() {
    return {
      type: "clean",
      paddingX: 5,
      css: "app_layout",
      cols: [
        Sidemenu(this.app.config.name),
        { type: "wide", paddingY: 10, paddingX: 5, rows: [{ $subview: true }] },
      ],
    };
  }

  init() {
    this.use(plugins.Menu, "top:menu");
  }
}
