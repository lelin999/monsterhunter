var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
	question: {type: String, required: true, minlength: 8},
	option1: {type: String, required: true, minlength: 3},
	option2: {type: String, required: true, minlength: 3},
	option3: {type: String, required: true, minlength: 3},
	option4: {type: String, required: true, minlength: 3},
	option1Vote: {type: Number},
	option2Vote: {type: Number},
	option3Vote: {type: Number},
	option4Vote: {type: Number},
}, {timestamps: true});

mongoose.model('Poll', PollSchema);