module.exports.home = function(app, req, res) {
	res.render('index.ejs', {name_autor: 'Julio Cesar Khichfy', dataChart:{}});
}

module.exports.getEvents = function(app, req, res) {
	var textarea = req.body;
	console.log(textarea);
	res.render('index.ejs', {name_autor : 'Julio Cesar Khichfy', dataChart: textarea});
}
