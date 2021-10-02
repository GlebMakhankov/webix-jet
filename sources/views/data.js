import { JetView } from "webix-jet";
import { DatapageView } from "../components/Datapage/Datapage_View";
import { DatapageTabbar } from "../components/Datapage/Datapage_tabbar";
import { countries } from "../models/countries";
import { statuses } from "../models/statuses";

export default class DataView extends JetView {
  config() {
    return {
      rows: [DatapageTabbar(), DatapageView()],
    };
  }
  init() {
    $$("datapageCountries").parse(countries);
    $$("datapageStatuses").parse(statuses);
  }
}
