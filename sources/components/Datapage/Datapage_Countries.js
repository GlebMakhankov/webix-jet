export const DatapageCountries = () => ({
  rows: [
    {
      view: "form",
      id: "countriesForm",
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
              view: "button",
              value: "Add",
              width: 200,
              css: "webix_primary",
              click: () =>
                $$("datapageCountries").add($$("countriesForm").getValues()),
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
      id: "datapageCountries",
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
              $$("datapageCountries").remove(id);
            });
        },
      },
    },
  ],
});
