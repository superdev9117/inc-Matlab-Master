var mongoose = require('mongoose'),
	Schema 	 = mongoose.Schema,
	ObjectId = Schema.ObjectId;

// var PanelSchema = new Schema({
// 	modules : [String]
// });

var ModuleSchema = new Schema({
	title : String,
	sub : String,
	ans : [String],
	x : {type: Number},
	y : {type: Number},
	type: String,
	hint : String,
	src : String,
	input : String
});

var PanelSchema = new Schema({
	name: String,
	modules : [ModuleSchema],
	course : String,
	ref : String
});

PanelSchema.statics.savePanel = function(panel){
	return panel.save();
};

var Panel = mongoose.model('Panel', PanelSchema);
module.exports = Panel;