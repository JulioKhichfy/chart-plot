 module.exports = function(application){


 	console.log("passei na rota");

	application.post('/send', function(req, res){
		application.app.controllers.index.getEvents(application, req, res);
	});

	application.get('/', function(req, res){
		application.app.controllers.index.home(application, req, res);
	});

}