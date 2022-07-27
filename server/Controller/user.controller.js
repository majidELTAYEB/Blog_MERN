const UserServices = require('../Services/UserServices');
const checkCredentials = require('../Functions/checkCredentials')
module.exports = class User
{
   
     static async ApiCreateUser(req,res){
          await UserServices.createUser(req.body, res);

     }

     static async Login(req, res){
           await UserServices.auth(req.body, res)

     }
}