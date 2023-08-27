const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ContactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    }, 
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    number: {
        type: String,
        validate: {
            validator: function(v) {
              return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, "Number is required"]
    },
    company: {
        type: String,
        required: [true, "Company is required"]
    }
})

const ContactModel = mongoose.model("contact", ContactSchema)

module.exports = ContactModel;