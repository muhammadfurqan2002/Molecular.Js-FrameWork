module.exports={
	name:"student",

	setting:{},

	dependencies:["teacher"],

	actions:{
		testing:{
			rest:{
				method:"GET",
				path:"/testing"
			},
			async handler(ctx){
				let nodeId=this.broker.nodeID;
				return `Student service testing ${nodeId}`+ctx.params.name;
			}
		}
	},

	methods:{},

	events:{
		"student.assignment":{
			group:"student",
			handler(payload){
				console.log("Student service received assignment event",payload);
			}
		}
	},

	created(){
		console.log("Student service created");
	},

	started:()=>{
		console.log("Student service started");
	},
	stopped:()=>{
		console.log("Student service stopped");
	},

};
