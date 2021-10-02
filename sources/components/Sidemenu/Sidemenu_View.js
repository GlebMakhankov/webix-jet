import { header } from "./header";
import { menu } from "./menu";

export const Sidemenu = (appName) => ({
  paddingX: 5,
  paddingY: 10,
  rows: [{ css: "webix_shadow_medium", rows: [header(appName), menu()] }],
});
