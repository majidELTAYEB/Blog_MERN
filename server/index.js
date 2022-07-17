const bodyParser =  require("body-parser");
const exepress = require("express")
const User = require('./Routes/user.routes')

const app = exepress();
const port = 8000;

app.use(exepress.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use("/user",User)

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});