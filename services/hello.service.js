// export named
// default export

const {
	settings,
	dependencies,
	actions,
	events,
	methods,
	created,
} = require("./greeter.service");

module.exports = {
	// properties values //

	// Service name
	name: "hello",

	settings: {}, //object

	dependencies: [], // Service dependencies (array,where services depend on other services)

	actions: {
		// Service actions object
		// routes define (to show something on particular route)
		greet: {
			// rest api
			// method
			rest: {
				// rest api
				method: "GET", // method,
				path: "/greet", // path
			},
			async handler(ctx) {
				return "Hello Custom Moleculer Service Implementation"+ctx.params.name;
			},
		},
	},

	events: {}, // Service events object

	// lifecycle methods of a service

	methods:{

	},

	// create a service
	created() {}, //function
	// start a service
	started: function () {}, //function
	// stop a service
	stopped: () => {}, //function
};
