const nodemailer = require('nodemailer');

hilsaEvent.on('event', (msg) => {
	hilsaLog.log(msg);
})

hilsaEvent.on('sendEmail', (msg) => {
	const transport = nodemailer.createTransport({
		service : "Gmail",
		auth : {
			user : hilsaEmail.auth.email,
			pass : hilsaEmail.auth.password
		}
	})
	transport.sendMail({
		from : hilsaEmail.auth.email,
		to : hilsaEmail.to,
		subject : "[HILSA REPORT] " + msg.message,
		text : msg.stack
	}, (err, hasil) => {
		if (err) {
			hilsaLog.error(err);
		} else {
			hilsaLog.log("Error already sent in email " + hilsaEmail.to);
		}
	})
})