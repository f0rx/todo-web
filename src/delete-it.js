const nodemailer = require("nodemailer");
const mg = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: 'efe700def2649157ef40fe5f229152c2-a4502f89-9f9489c8',
    domain: 'sandbox1a273aed566741c9a41d0c379ef0b76b.mailgun.org'
  },
  // proxy: 'http://user:pass@localhost:8080' // optional proxy, default is false
}
    // password: 'aeb38c1c3569db83c789489f214aad24-ba042922-36e91107'

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // create reusable transporter object using the default SMTP transport
 //  let transporter = nodemailer.createTransport({
 //  	service: 'Mailgun', // no need to set host or port etc.
	// auth: {
	// 	user: 'postmaster@sandbox1a273aed566741c9a41d0c379ef0b76b.mailgun.org',
	// 	pass: 'aeb38c1c3569db83c789489f214aad24-ba042922-36e91107'
	// },
 //    debug: true, // show debug output
 //    logger: true, // log information in console
 //  });

	let transporter = nodemailer.createTransport(mg(auth));

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Smartlets Team" <no-reply@smartlets.com>',
    to: [{name:'Brendan Ejike', address:'annebrian1994@gmail.com'}],
    subject: "Welcome to Smartlets",
    // 'h:Reply-To': 'ejike.br@gmail.com',
	html: '<b>Hey brother! </b><br> Hey there, it’s our first message sent with MailGun Hooray!!<br />',
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);