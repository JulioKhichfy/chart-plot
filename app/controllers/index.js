module.exports.home = function(app, req, res) {
	console.log("passei no controler home");
	res.render('index.ejs',{name_autor : 'Julio Cesar Khichfy' , eventsJson:''} );
}

module.exports.getEvents = function(app, req, res) {
	var events = req.body.eventsJson;
	var obj = eval("(" + events + ')');
	res.render('index.ejs', {name_autor : 'Julio Cesar Khichfy', eventsJson : JSON.stringify(obj) });
}
