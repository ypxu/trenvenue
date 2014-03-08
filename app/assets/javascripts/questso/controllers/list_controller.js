
Questso.ListController = Questso.Controller.extend({
	model: function(){
		console.log("Questso.ListController... model function");
	}
});

Questso.ListController.reopenClass({
	filters: ['latest']
});