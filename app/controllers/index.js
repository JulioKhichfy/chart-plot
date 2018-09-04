module.exports.home = function(app, req, res) {
	res.render('index.ejs',{name_autor : 'Julio Cesar Khichfy' , eventsJson : '' , validacao : '' , valuesToTextArea : ''});
}

module.exports.getEvents = function(app, req, res) {
	
	var jsonFromTextArea = JSON.stringify(req.body.eventsJson);
	var numlinhas = parseInt(req.body.countLines);
	
	req.assert('eventsJson', 'Input de dados é obrigatório').notEmpty();
    req.assert('eventsJson', 'Isso não me parece um input válido, cada linha deve ter no minimo 3 caracteres').len(3);
    if(numlinhas<=3){
    	req.assert('countLines', 'Não é possível gerar gráfico com essas informações, no mínimo devemos ter Start, Span, Data e Stop').equals(3);
    }

    var erros = req.validationErrors();

    if(erros){
    	jsonFromTextArea = jsonFromTextArea.substring(1,jsonFromTextArea.length-1);
    	var valueTextArea = jsonFromTextArea.split("\\r\\n");
    	var arrayLines = new Array;
    	for(var i = 0 ; i < numlinhas ; i++) {
    		if(i==numlinhas-1)
    			var line =valueTextArea[i]
    		else
    			var line =valueTextArea[i]+'\r\n';
    		arrayLines.push(line);	
    	}
        res.render('index.ejs',{name_autor : 'Julio Cesar Khichfy', eventsJson : '', valuesToTextArea : arrayLines, validacao : erros});
        return;
    }

	var eventsStringArray = new Array;
	var eventsObjArray = new Array;
	
	if (jsonFromTextArea.indexOf("\\r\\n") != -1)
	{
		eventsStringArray = jsonFromTextArea.split("\\r\\n");
	}
	
	for(var i = 0 ; i < numlinhas ; i++) {
		var line = (eventsStringArray[i].replace('"',''));
		var str = JSON.stringify(eval('('+line+')')) ;
		console.log(">>>>> str" + str);
		var obj = eval("(" + str + ')');
		//console.log(">>>>> obj name " + obj.name);
		eventsObjArray.push(obj);
	}


	//res.render('index.ejs', {name_autor : 'Julio Cesar Khichfy', eventsJson : JSON.stringify(eventsObjArray) });
	res.render('index.ejs', {name_autor : 'Julio Cesar Khichfy', eventsJson : JSON.stringify(eventsObjArray) });
}
