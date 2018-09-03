 module.exports = function(application){

	application.post('/', function(req, res){
		application.app.controllers.index.getEvents(application, req, res);
	});

	application.get('/', function(req, res){
		application.app.controllers.index.home(application, req, res);
	});

}