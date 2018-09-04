function EventModel(json){
	this_json = json;
	
}

EventModel.prototype.getEvent = function(callback){
	
}

EventModel.prototype.getEvents = function(){
	console.log(">> no model" + this_json);
	return 	eval('var obj='+this_json);
}



module.exports = function(){
	return EventModel;
}