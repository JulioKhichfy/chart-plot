module.exports.home = function(app, req, res){
	console.log("passei no controler home");
	res.render('index.ejs',{name_autor : 'Julio Cesar Khichfy' , eventsJson:''} );
}

module.exports.getEvents = function(app, req, res){
	

	var example = '{ "name":"John", "age":30, "city":"New York"}';
	var test = JSON.parse(example);
	console.log(">>>>example " + example);
	console.log(">>>>test " + test.name);

	var events = req.body.eventsJson;
	//console.log("req body events: " + events);
	
	var dataStr = JSON.stringify(events, ['type']);
	var objEvents = JSON.parse(dataStr);
	console.log(">>>>> objEvents type: " + objEvents.type);  
	
	
	
	//console.log("stringify dataStr: " + dataStr);
	//console.log("stringify dataStr type : " + dataStr.type);

    //var obj = JSON.parse(dataStr);
    //console.log("obj: " + obj);
	//console.log("obj type: " + obj.type);    
	
	res.render('index.ejs', {name_autor : 'Julio Cesar Khichfy', eventsJson : dataStr});
}
