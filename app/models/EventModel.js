function EventModel() {
	this._type='';
	this._timestamp='';
}

EventModel.prototype.getEvent = function(callback) {
}

EventModel.prototype.getEvents = function(callback) {
}

module.exports = function() {
	return EventModel;
}