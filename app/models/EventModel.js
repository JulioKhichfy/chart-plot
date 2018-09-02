/*function EventModel() {
	this.xtype = '';
	this.timestamp = '';
}*/
var EventModel = function () {
}

EventModel.prototype.getEvent = function(callback) {
}

EventModel.prototype.getEvents = function(req) {
	
	
	var chartData = [];
        for (var i = 0; i < 7; i++)
            chartData.push(Math.random() * 50);

        var result = JSON.stringify(chartData);
	console.log(result);
	return result;
}

module.exports = function() {
	return EventModel;
}