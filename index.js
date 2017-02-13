const util = require('util');
const Emiter = require('./lib/event');
global.hilsaEvent = new Emiter();
global.hilsaLog = require('./lib/console');

process.on("uncaughtException", function(err) {
	hilsaLog.error(err.stack);
	hilsaEvent.emit("sendEmail", err);
})
global.hilsaEmail = {
	auth : {
		email : "xxxx",
		password : "xxxx"
	}, to : "xxxxx"
}

require('./lib/emitter');

module.exports = {
	email : (options) => {
		global.hilsaEmail = options;
	}
}