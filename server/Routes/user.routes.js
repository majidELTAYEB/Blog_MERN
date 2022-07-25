const  express =  require("express");
const router = express.Router();
const ArticleCtrl = require("../Controller/user.controller");

router.post("/register", ArticleCtrl.ApiCreateUser);
router.post("/login", ArticleCtrl.Login)

module.exports =  router;