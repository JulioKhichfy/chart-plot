// index.js

module.exports.home = function(app, req, res) {
	res.render('index.ejs',{
		name_autor: 'Julio Cesar Khichfy',
		graph_teste: '',
		validacao: '' ,
		valuesToTextArea: ''
	});
}

module.exports.getEvents = function(app, req, res) {
	//var payload = JSON.stringify(req.body.eventsJson);
	var payload = req.body.eventsJson;
	var numlinhas = parseInt(req.body.countLines);
	
	req.assert('eventsJson', 'Input de dados é obrigatório').notEmpty();
    req.assert('eventsJson', 'Isso não me parece um input válido,' +
    	' cada linha deve ter no minimo 3 caracteres').len(3);
    
    if(numlinhas<=3) {
    	req.assert('countLines', 'Não é possível gerar gráfico com essas informações, ' +
    		'no mínimo devemos ter Start, Span, Data e Stop').equals(3);
    }
    
	var erros = req.validationErrors();
	var lines = payload.split('\n');
	//var lines = payload.substr(1, payload.length - 1).split("\n");
	console.log(lines);

	//var lines = payload.substring(1, payload.length - 1).split("\\r\\n");
	var dataset = new Array;

	lines.forEach(function (jsentry) {
		if (jsentry != '')
			dataset.push(eval('(' + jsentry + ')'));
	});

	var typemap = new Map();

	dataset.forEach(function (entry) {
		if (typemap[entry.type])
			typemap[entry.type].push(entry);
		else
			typemap[entry.type] = [entry];
	});

	for (key in typemap) {
		typemap[key].sort(function (a, b) {
			return a.timestamp > b.timestamp ? 1 :
				a.timestamp < b.timestamp ? -1 : 0;
		});
	}

	if(erros)
		res.render('index.ejs', {name_autor: 'Julio Cesar Khichfy', graph_teste: '',
			valuesToTextArea: lines, validacao: erros});
	
	res.render('index.ejs', {name_autor: 'Julio Cesar Khichfy', graph_teste: 'true',
		validacao: erros, valuesToTextArea: lines});
}
