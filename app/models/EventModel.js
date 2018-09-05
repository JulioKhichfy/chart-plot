
function EventModel(data)
{
	this.data = data;
}

EventModel.prototype.getChart = function()
{
}

module.exports = function () { return EventModel; }