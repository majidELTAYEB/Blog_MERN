require('dotenv').config();
const mongoose =  require("mongoose");

mongoose.connect(process.env.mongoURI,{useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true,})
.then(res => console.log(`Connection reussie`))
.catch(err => console.log(`erreur dans la connection MongoDb ${err}`));

module.exports = mongoose;