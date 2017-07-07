var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'firstname' : String,
	'lastname' : String,
	'gender' : String,
	'birthdate' : Date,
	'email' : String,
	'status' : String
},{
	timestamps:true,
	collection:'user'
});
userSchema.birthdate

module.exports = mongoose.model('user', userSchema);
