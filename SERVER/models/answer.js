var mongoose = require('mongoose'),
	Schema 	 = mongoose.Schema;

var AnswerSchema = new Schema ({
	moduleId : {type: String, required: true},
	correct  : [String]
});

AnswerSchema.statics.saveAnswer = function(answer){
	return answer.save();
};

var Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;