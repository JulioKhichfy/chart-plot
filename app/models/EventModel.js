
function EventModel(objects) {
	this.objs = objects;
	this.datas = [];
	this.span = [];
	this.stop = [];
}

EventModel.prototype.getChart = function() {
	var datacount=0;
	var spancount=0;
	var stopcount=0;
	for(var i = 0; i < this.objs.length; i++) {
		if(this.objs[i].type == 'data') {
			this.datas[datacount] = ([{"type": this.objs[i].type}, {"timestamp": this.objs[i].timestamp}, {"min": this.objs[i].min_response_time}, {"max": this.objs[i].max_response_time}, {"os": this.objs[i].os}, {"browser": this.objs[i].browser}]);
			datacount++;
		}else if(this.objs[i].type == 'span') {
			this.span[spancount] = ([{"type": this.objs[i].type}, {"begin": this.objs[i].begin},{"begin": this.objs[i].end}]);
			spancount++;
		}else if(this.objs[i].type == 'stop') {
			this.stop[stopcount] = ([{"type": this.objs[i].type}, {"timestamp": this.objs[i].timestamp}]);
			stopcount++;
		}

	}

	console.log(this.datas);
	console.log(this.span);
	console.log(this.stop);
}



module.exports = function(){
	return EventModel;
}