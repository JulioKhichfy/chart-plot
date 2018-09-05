// index.js

module.exports.home = function(app, req, res)
{
	res.render('index.ejs', {author: 'Julio Cesar Khichfy',
		textarea: '', validation: ''});
}
 
function map(lines)
{
	var dataset = [];
	var typemap = new Map();

	lines.forEach(function (e) {
		if (e && e != '')
			dataset.push(eval('(' + e + ')'));
	});

	dataset.forEach(function (e) {
		if (typemap[e.type])
			typemap[e.type].push(e);
		else
			typemap[e.type] = [e];
	});

	for (key in typemap) {
		typemap[key].sort(function (a, b) {
			return a.timestamp > b.timestamp ? 1 :
				a.timestamp < b.timestamp ? -1 : 0;
	
		});
	}

	return typemap;
}

module.exports.getEvents = function(app, req, res)
{
	var nlines = parseInt(req.body.countLines);

	req.assert('eventsJson', 'Missing required fields').notEmpty();
    req.assert('eventsJson', 'Lines too short').len(3);
    
    if(nlines <= 3)
    	req.assert('countLines', 'Inconsistent dataset').equals(3);
    
    var errors = req.validationErrors();

	var lines = req.body.eventsJson.split('\n');

	if(errors)
		return res.render('index.ejs', {author: 'Julio Cesar Khichfy',
		textarea: lines, validation: errors});

	var events = new app.app.models.EventModel(map(lines));
	
	res.render('index.ejs', {author: 'Julio Cesar Khichfy',
		textarea: lines, validation: errors});
}
