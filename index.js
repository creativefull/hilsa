const util = require('util');
const Emiter = require('./lib/event');
global.hilsaEvent = new Emiter();
global.hilsaLog = require('./lib/console');

process.on("uncaughtException", function(err) {
	hilsaLog.error(err.stack);
	if (global.hilsaEmail) {
		hilsaEvent.emit("sendEmail", err);
	}
	if (global.hilsaSlack) {
		hilsaEvent.emit("postSlack", err);
	}
})

require('./lib/emitter');

module.exports = {
	email : (options) => {
		global.hilsaEmail = options;
	},
	slack : (options) => {
		global.hilsaSlack = options;
	}
}