import { JetView } from "webix-jet";
import { countries } from "../models/countries";
import "./myCustomForm";

export default class CountriesView extends JetView {
  config() {
    const form = {
      view: "myCustomForm",
      fields: ["Name"],
      localId: "countriesForm",
      saveAction: () => {
        const form = this.$$("countriesForm");
        this.$$("countriesTable").add(form.getValues());
        form.clear();
      },
    };

    const datatable = {
      view: "datatable",
      localId: "countriesTable",
      columns: [
        {
          id: "Name",
          header: "Country",
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
              title: "Delete entry?",
              text: "Are you sure about that?",
            })
            .then(() => {
              this.$$("countriesTable").remove(id);
            });
        },
      },
    };

    const ui = {
      rows: [
        form,
        datatable,
      ],
    };

    return ui;
  }
  init() {
    this.$$("countriesTable").parse(countries);
  }
}
