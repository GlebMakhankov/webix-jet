export default webix.protoUI(
	{
		name: "myCustomForm",
		defaults: {
			margin: 10,
		},
		$init: function (config) {
			config.elements = this.createForm(config);
		},

		createForm(config) {
			return [
				{
					cols: [
						...this.createFields(config),
						{
							margin: 10,
							cols: [this.createButton(config, "Save")],
						},
					],
				},
			];
		},

		createFields(config) {
			return config.fields.map((element) => ({
				view: "text",
				label: [element],
				name: [element],
			}));
		},

		createButton(config, type) {
			return {
				view: "button",
				value: type,
				width: 200,
				css: type == "Save" ? "webix_primary" : "",
				click: () =>
					(config[type.toLowerCase() + "Action"]
						? config[type.toLowerCase() + "Action"]
						: function () {
							webix.message(
								`No action was attached to the <strong>${type}</strong> button`
							);
						})(),
			};
		},
	},
	webix.ui.form
);
