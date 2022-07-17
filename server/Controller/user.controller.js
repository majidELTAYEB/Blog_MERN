const UserServices = require('../Services/UserServices');

module.exports = class User{
   static async ApiCreateUser(req,res,next){
        try {
            console.log(req.body)
            // const createdUser =  await UserServices.createUser(req.body);
            // res.json(createdUser);
         } catch (error) {
            res.status(500).json({error: error});
         }
           
    }
}