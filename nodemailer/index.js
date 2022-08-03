/* "use strict";
const nodemailer = require("nodemailer");
 
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
 
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'aglae.mohr86@ethereal.email',
        pass: '1ARVud1grsWw2gqzVR'
    }
});
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Captain Jack Sparrow" <Onkarsetia23@gmail.com>', // sender address
    to: "aglae.mohr86@ethereal.email", // list of receivers
    subject: "Hello this is your Captain Jack sparrow", // Subject line
    text: "NOT, jack Sparrow, Captain Jack Sparrow", // plain text body
    html: "<b>Sayonaara</b>", // html body
  });
 
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
 
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
 
main().catch(console.error); */






  "use strict";
const nodemailer = require("nodemailer");
 
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
 
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "tressa.harber33@ethereal.email",
      pass: "HEZmQwEkwRFBk34Jcz",
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Captain Jack Sparrow" <Onkarsetia23@gmail.com>', // sender address
    to: "tressa.harber33@ethereal.email", // list of receivers
    subject: "Hello this is your Captain Jack sparrow", // Subject line
    text: "NOT, jack Sparrow, Captain Jack Sparrow", // plain text body
    html: "<b>Sayonaara</b>", // html body
  });
 
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
 
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
 
main().catch(console.error);