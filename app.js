//modularizing configuration and importing modules in config/server.js 
var app = require('./config/server');

//port: 3000  - server up 
app.listen(3000, function(){
	console.log("Servidor Express ON");
});
