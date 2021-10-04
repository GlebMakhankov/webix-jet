import { JetView } from "webix-jet";
import { statuses } from "../models/statuses";
import "./myCustomForm";

export default class StatusesView extends JetView {
  config() {
    const form = {
      view: "myCustomForm",
      localId: "statusesForm",
      fields: ["Name", "Icon"],
      saveAction: () => {
        const form = this.$$("statusesForm");
        this.$$("statusesTable").add(form.getValues());
        form.clear();
      },
    };

    const datatable = {
      view: "datatable",
      localId: "statusesTable",
      columns: [
        {
          id: "Name",
          header: "Status",
          fillspace: true,
          sort: "text",
          editor: "text",
        },
        {
          id: "Icon",
          header: "Icon",
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
              this.$$("statusesTable").remove(id);
            });
        },
      },
    };

    const ui = {
      rows: [form, datatable],
    };

    return ui;
  }
  init() {
    this.$$("statusesTable").parse(statuses);
  }
}
