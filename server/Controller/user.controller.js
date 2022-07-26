const UserServices = require('../Services/UserServices');
module.exports = class User{
   
   static async ApiCreateUser(req,res,next){
        try {
            const createdUser =  await UserServices.createUser(req.body, res);
             res.json(createdUser);
         } catch (error) {
            
            //console.log(error)
         }
           
    }

    static async Login(req, res, next){
         try {
           const test = await UserServices.auth(req.body, res)
           res.json(test)
          //res.status(401).json('auth_ok');
         }catch (error) {
            
         }
    }

}