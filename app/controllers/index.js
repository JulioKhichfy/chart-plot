module.exports.home = function(app, req, res) {
	res.render('index.ejs', {name_autor: 'Julio Cesar Khichfy', dataChart: ''});
}

module.exports.getEvents = function(app, req, res) {
	var o = new app.app.models.EventModel;
	var chart = o.getEvents(req);
	res.render('index.ejs', {name_autor : 'Julio Cesar Khichfy', dataChart: chart});
}
