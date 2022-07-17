require('dotenv').config();
const mongoose =  require("mongoose");

mongoose.connect(process.env.mongoURI)
.then(res => console.log(`Connection reussie`))
.catch(err => console.log(`erreur dans la connection MongoDb ${err}`));

module.exports = mongoose;