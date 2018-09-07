// controller

module.exports.home = function(app, req, res)
{
    res.render('index.ejs', {textarea: '', validation: '',
	author: 'Julio Cesar Khichfy'}); // XXX
}

module.exports.getEvents = function(app, req, res)
{
    var nlines = parseInt(req.body.countLines);

    req.assert('eventsJson', 'Missing required fields').notEmpty();
    req.assert('eventsJson', 'Lines too short').len(3);

    if(nlines <= 3)
    	req.assert('countLines', 'Inconsistent dataset').equals(3);

    var lines = req.body.eventsJson.split('\n');
    var errors = req.validationErrors();

    if(errors)
	return res.render('index.ejs', {textarea: lines, validation: errors,
		author: 'Julio Cesar Khichfy'}); // XXX

    var eventSet = new app.app.models.EventSet(lines);

    res.render('index.ejs', {textarea: lines, validation: errors,
                author: 'Julio Cesar Khichfy'}); // XXX
}
