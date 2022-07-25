const User = require("../Model/User");
const PasswordHash = require('../motDepasse/password');

const SECRET_KEY = process.env.SECRET_KEY;
const jwt    = require('jsonwebtoken');

module.exports = class UserServices{
    
    static async createUser(data){
        try {
            const hashed = await PasswordHash.hashPassword(data.password)
            const newUser = {
                firstName : data.firstname,
                lastName : data.lastname,
                userName : data.username,
                email : data.email,
                password : hashed,
            }
            const response = await new User(newUser).save();
            return response;
        } catch (error) {
            console.log(error)
            return error
        }
    }

    static async auth(data){
        try {
            const user = await User.findOne({ email: data.email })
            if(!user) return "email mauvais"
            const check = await PasswordHash.comparePassword(data.password, user.password)
            if (!check) return 'mot de passe mauvais'
            

            const expireIn = 24 * 60 * 60;
            const token = jwt.sign({ user: user }, SECRET_KEY, { expiresIn: expireIn });

            // res.header('Authorization', 'Bearer ' + token);
            console.log(token)
             return token;
            
        } catch (error) {

        }
    }
}