module.exports.home = function(app, req, res){
	console.log("passei no controler home");
	res.render('index.ejs',{name_autor : 'Julio Cesar Khichfy' , eventsJson:''} );
}

module.exports.getEvents = function(app, req, res){
	
	var events = req.body.eventsJson;
	console.log(">>>>> events: " + events);
	
	json = JSON.stringify(events);
	console.log("json typeof: " + typeof json);
	console.log(">>>>> json: " + json);
	console.log("json name: " + json.name);
	
	data = JSON.parse(json);
	console.log("data typeof: " + typeof data);
	console.log("data: " + data);
	console.log("data typeof: " + data.name);

	/*teste hard c*/
	eventStr = JSON.stringify({name:"julio"});
	datateste = JSON.parse(eventStr);
	console.log(">>>>> stringify eventStr typeof : " +typeof datateste);
	console.log(">>>>> stringify eventStr : " + datateste);
	console.log(">>>>> stringify eventStr name : " + datateste.name);
	
	
	res.render('index.ejs', {name_autor : 'Julio Cesar Khichfy', eventsJson : eventStr});
}
