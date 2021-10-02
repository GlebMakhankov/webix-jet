export const ContactsForm = () => ({
  view: "form",
  maxWidth: 400,
  margin: 10,
  id: "contactsForm",
  elements: [
    { template: "Form for contacts", type: "section" },
    {
      view: "text",
      label: "The First",
      name: "first",
    },
    {
      view: "text",
      label: "The Second",
      name: "second",
    },
    { maxHeight: 15 },
    {
      margin: 15,
      cols: [
        {
          view: "button",
          value: "Save",
          id: "saveBtn",
          css: "webix_primary",
          click: () => webix.message(`<strong>Save</strong> click`),
        },
        {
          view: "button",
          value: "Clear",
          id: "clearBtn",
          css: "webix_primary",
          click: () => webix.message(`<strong>Clear</strong> click`),
        },
      ],
    },
    {},
  ],
});
