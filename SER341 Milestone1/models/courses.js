
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var courseSchema = new Schema({
	courseId : { 
			type : String,
			required: true,
			},
	courseTitle : {
			type : String,
			required : true
	},
	professor: {
        type: String
    },
	students: {
        type: [String]
    },
	assignments: {
		type: [String]
    }
});

//idk if this is working lol
var Course = mongoose.model('courses', courseSchema);
module.exports = Course;
