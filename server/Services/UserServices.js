const User = require("../Model/User");

module.exports = class UserServices{
    
    static async createUser(data){
        try {
            const newUser = {
                firstName : data.firstName,
                lastName : data.lastName,
                userName : data.userName,
                emailName : data.emailName,
                password : data.password,
            }
            const response = await new User(newUser).save();
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}