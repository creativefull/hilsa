var colors = require('colors');
var util = require('util');
module.exports = {
	log : function(msg) {
		msg = util.isObject(msg) ? JSON.stringify(msg) : msg;
		console.log(colors.green(msg))
	},
	error: function(msg) {
		msg = util.isObject(msg) ? JSON.stringify(msg) : msg;
		console.log(colors.red(msg))
	},
	warn: function(msg) {
		msg = util.isObject(msg) ? JSON.stringify(msg) : msg;
		console.log(colors.yellow(msg))
	}
}