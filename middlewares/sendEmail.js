const nodemailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c4cd0be36d8010",
      pass: "d80f4a0d3bf360",
    },
  });
  const mailOptions = {
    from: "gayatrirankawat5@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};
