const bcrypt = require("bcrypt");

module.exports = class Password{

    static async hashPassword(plaintextPassword) {
       return await bcrypt.hash(plaintextPassword, 10);
        
    }

    static async comparePassword(plaintextPassword, hash) {
        return await bcrypt.compare(plaintextPassword, hash);
    }
 }