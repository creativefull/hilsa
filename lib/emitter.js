const nodemailer = require('nodemailer');
const Slack = require('slack-node');

hilsaEvent.on('event', (msg) => {
	hilsaLog.log(msg);
})

hilsaEvent.on('sendEmail', (msg) => {
	if (hilsaEmail) {
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
	}
})

hilsaEvent.on("postSlack", (msg) => {
	const slack = new Slack();
	slack.setWebhook(hilsaSlack.webhook);

	slack.webhook({
		channel : hilsaSlack.channel,
		usename : hilsaSlack.username,
		text : "[HILSA REPORT] " + msg.message,
		icon_emoji : ":bug:",
		attachments : [{
			text : msg.stack
		}]
	}, (err, response) => {
		if (err) throw err;
		hilsaLog.log("Error Already Sent in slack");
	})
})