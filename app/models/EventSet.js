
function EventSet(lines) {
    this.evs = [];
    this.map = new Map();

    if (lines)
	this.insert(lines);
}

EventSet.prototype.insert = function (lines) {
    var evs = this.evs;
    var map = this.map;

    lines.forEach(function (e) {
	if (e && e != '') // XXX must sanitize 'e'
	    evs.push(new Event(eval('(' + e + ')')));
    });

    evs.forEach(function (e) {
	if (map[e.type])
	    map[e.type].push(e);
	else
	    map[e.type] = [e];
    });

    for (key in map) {
	map[key].sort(function (a, b) {
	    return a.timestamp > b.timestamp ? 1 :
		a.timestamp < b.timestamp ? -1 : 0;
	});
    }
}

EventSet.prototype.draw = function() {
}

module.exports = function () { return EventSet; }
