const User = require("../Model/User");
const PasswordHash = require('../Functions/password');
const checkCredentials = require('../Functions/checkCredentials')

const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');

module.exports = class UserServices
{
    
    static async createUser(data, res){
        try {
            const checkinput = await checkCredentials.register(data)
            if(!checkinput) return res.status(400).json('champs manquant')

            const hashed = await PasswordHash.hashPassword(data.password)

            const newUser = {
                firstName : data.firstname,
                lastName : data.lastname,
                userName : data.username,
                email : data.email,
                password : hashed,
            }
            const response = await new User(newUser).save();
            return res.status(200).json(response)
        } catch (error) {
            return res.status(400).json('email deja present')
        }
    }

    static async auth(data, res){
        try {
            const checkinput = await checkCredentials.login(data)
            if(!checkinput) return res.status(400).json('champs manquant')

            const user = await User.findOne({ email: data.email })
            if(!user) return res.status(400).json("email inexistant")
            
            const check = await PasswordHash.comparePassword(data.password, user.password)
            if (!check) return res.status(400).json("mot de passe incorrect")
            

            const expireIn = 24 * 60 * 60;
            const token = jwt.sign({ user: user }, SECRET_KEY, { expiresIn: expireIn });
            res.header('Authorization', 'Bearer ' + token);
            return res.status(200).json('OK');
            
            
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}