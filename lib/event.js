const EventEmitter = require('events');
const util = require('util');

function MyEvent() {
	EventEmitter.call(this);
}

util.inherits(MyEvent, EventEmitter);
module.exports = MyEvent;