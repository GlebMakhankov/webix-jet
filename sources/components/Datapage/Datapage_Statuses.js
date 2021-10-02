export const DatapageStatuses = () => ({
  rows: [
    {
      view: "form",
      id: "statusesForm",
      margin: 20,
      elements: [
        {
          cols: [
            {
              view: "text",
              label: "Name",
              name: "Name",
            },
            {
              view: "text",
              label: "Icon",
              name: "Icon",
            },
            {
              view: "button",
              value: "Add",
              width: 200,
              css: "webix_primary",
              click: () =>
                $$("datapageStatuses").add($$("statusesForm").getValues()),
            },
          ],
        },
      ],
    },
    {
      view: "datatable",
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
      id: "datapageStatuses",
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
              $$("datapageStatuses").remove(id);
            });
        },
      },
    },
  ],
});
