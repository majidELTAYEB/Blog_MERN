const mongoose = require("../connexion/connexion.js");
const Schema = mongoose.Schema;

let User = Schema({

    firstName:{
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: true
    },

    userName:{
        type: String,
        required: true
    },

    email:{
        
    },

    password:{
        type: String,
        required: true
    },

    date:{
        type: Date,
        default: Date.now(),
    }
})

module.exports = User = mongoose.model("User", User);