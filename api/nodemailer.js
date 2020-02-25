"use strict";

const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

app.post("/", function(req, res) {
  let emailInfo = req.body.email;
  let emailProvider = req.body.provider;
  sendMail(emailInfo, emailProvider);
  res.status(200).json({ message: "Your mail send successfully" });
});
module.exports = {
  path: "/api/nodemailer",
  handler: app
};
const sendMail = (email, provider) => {
  let transporter = nodemailer.createTransport({
    host: provider.host,
    port: provider.port,
    auth: {
      user: provider.user,
      pass: provider.pass
    }
  });
  setTimeout(() => {
    transporter.sendMail({
      from: `${email.name} <${email.address}>`,
      to: email.recipient,
      subject: email.subject,
      text: email.message
  }, 100);
};
