module.exports.home = function(app, req, res) {
	console.log("passei no controler home");
	res.render('index.ejs',{name_autor : 'Julio Cesar Khichfy' , eventsJson:''} );
}

module.exports.getEvents = function(app, req, res) {
	var events = req.body.eventsJson;
	var numlinhas = req.body.countLines;

	var str = JSON.stringify(events).split(/\n/);

	console.log(">>>>> str" + str);
	
	console.log(">>>>> numlinhas " + numlinhas);
	console.log(">>>>> events" + events);
		
	var obj = eval("(" + str + ')');



	res.render('index.ejs', {name_autor : 'Julio Cesar Khichfy', eventsJson : JSON.stringify(obj) });
}
