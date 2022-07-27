const mongoose = require("../Functions/connexion.js");
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

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: "adresse mail requise",
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Veuillez entrer un email de passe valide",
        ],
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