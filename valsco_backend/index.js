const express = require('express')
const app = express()
<<<<<<< HEAD
const transporter = require('./email')
require('dotenv').config();
const cors = require('cors')
let port = process.env.PORT || 5000;
let url = 'https://valscotech.com/'


app.use(express.json());
app.use(cors({
    origin: url,
=======
const path = require('path')
const ContactModel = require("./models/contact_schema")
const database = require('./db')
const transporter = require('./email')
require('dotenv').config();
const cors = require('cors')
let port = 5000;

// database();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
>>>>>>> 20bf86a24038983cef29c12df3557aab933da954
}));

app.post('/', async (req, res) => {
    try {
<<<<<<< HEAD
        const { name, email } = req.body;

        const Client = {
            from: "connect@valscotech.com",
            to: email,
            subject: "Form Submitted Successfully",
            text: "Thank You for contacting us, We will reply to you shortly!"
        }

        const Admin = {
            from: "connect@valscotech.com",
            to: "connect@valscotech.com",
            subject: "Contact Form Submitted",
            text: `By ${name}, ${email} `
=======
        // const { name, email, number, company } = req.body;
        // const message = new ContactModel({
        //     name,
        //     email,
        //     number,
        //     company
        // })

        // const savedMessage = await message.save();

        const {email} = req.body;

        const Client = {
            from: process.env.EMAIL,
            to: email,
            subject: "Form Submitted Successfully",
            text: "Thank You for contacting me, We will reply to you shortly!"
        }

        const Admin = {
            from: process.env.EMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: "Sample Subject",
            text: "Sample Text"
>>>>>>> 20bf86a24038983cef29c12df3557aab933da954
        }

        const optArray = [Client, Admin];

<<<<<<< HEAD
        // Use map to create an array of promises
        const emailPromises = optArray.map(option => {
            return new Promise((resolve, reject) => {
                transporter.sendMail(option, (err, info) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(`Message sent successfully to ${option.to}`);
                        resolve(info);
                    }
                });
            });
        });

        // Wait for all promises to resolve using Promise.all
        await Promise.all(emailPromises);

        console.log("All messages sent successfully!");
        res.status(200).send("Emails sent successfully!");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("An Error Occurred!");
    }
});

=======
        optArray.forEach((option) => {
            transporter.sendMail(option, (err, info) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log("Sent" + info.response)
                console.log(`Message sent successfully to ${option.to}`)
            })
        });

        // console.log(savedMessage);

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("An Error Occured!");
    }
})
>>>>>>> 20bf86a24038983cef29c12df3557aab933da954

app.listen(port, () => {
    console.log(`the application has started successfully on localhost: http://localhost:${port}`);
})
