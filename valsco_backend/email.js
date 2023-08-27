const nodemailer = require('nodemailer')
require("dotenv").config()

const transporter = nodemailer.createTransport({
<<<<<<< HEAD
    host:'smtp.gmail.com',
    port:465,
    service:'gmail',
    auth:{
        user: "valscotech@gmail.com",
        pass: "yrmquydrbslmdhrx"
=======
    service:'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
>>>>>>> 20bf86a24038983cef29c12df3557aab933da954
    },
    pool: true
});

module.exports = transporter;