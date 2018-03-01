var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'montywbrown@gmail.com',
		pass: '' 
	}
});

var mailOptions = {
	from: 'montywbrown@gmail.com',
	to: 'montywbrown@gmail.com, montgomery.brown@student.tamdistrict.org',
	subject: 'hey',
	text: '6668'
};

transporter.sendMail(mailOptions, function(error, info) {
	if (error) {console.log(error)}
	else {console.log('Email sent: ' + info.response);}
});