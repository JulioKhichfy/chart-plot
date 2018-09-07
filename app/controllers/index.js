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
	var lines = req.body.eventsJson.split('\n');

	req.assert('eventsJson', 'Missing required fields').notEmpty();
    req.assert('eventsJson', 'Lines too short').len(3);
    
    if(nlines <= 3)
    	req.assert('countLines', 'Inconsistent dataset').equals(3);
    
    req.assert('eventsJson', 'all blank lines ?').custom(function(lines){
    	n = nlines;
    	while(n > 0){
    		if(!(/[\n|\n\r]/.test(lines[n]) || lines[n] == '')){
    			return true;
    		}
    		n--;
    	}
    	return false;
    });

    req.assert('eventsJson', 'dont use blank line').custom(function(lines){
    	n = nlines;
    	while(n > 0){
    		if(/[\n|\n\r]/.test(lines[n]) || lines[n] == ''){
    			return false;
    		}
    		n--;
    	}
    	return true;
    });

    //TODO porque nao esta correto ? - retorna ':' 
    req.assert('eventsJson', 'crazy input').custom(function(lines){

    	try{
    		n=nlines;
    		while(n > 0){
    			console.log(lines[n]);
    	 		eval('(' + lines[n] + ')');
    	 		n--;
    	 	}
    	 	return true;
    	}catch(err){
    		console.log(err);
    		return false;
    	}
    });
   

    var errors = req.validationErrors();

	if(errors)
		return res.render('index.ejs', {author: 'Julio Cesar Khichfy',
		textarea: lines, validation: errors});

	var events = new app.app.models.EventModel(map(lines));
	
	res.render('index.ejs', {author: 'Julio Cesar Khichfy',
		textarea: lines, validation: errors});
}
