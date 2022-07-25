const UserServices = require('../Services/UserServices');


module.exports = class User{
   
   static async ApiCreateUser(req,res,next){
        try {
            const createdUser =  await UserServices.createUser(req.body);
            res.json(createdUser);
         } catch (error) {
            res.status(500).json({error: error});
            console.log(error)
         }
           
    }

    static async Login(req, res, next){
         try {
           const test = await UserServices.auth(req.body)
           res.json(test)
         }catch (error) {

         }
    }
}